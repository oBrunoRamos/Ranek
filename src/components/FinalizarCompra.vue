<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizarCompra">
        Finalizar Compra
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import { api } from "@/services.js";
import UsuarioForm from "./UsuarioForm.vue";
import { mapState } from "vuex";

export default {
  name: "FinalizarCompra",
  components: {
    UsuarioForm,
  },
  props: ["produto"],
  computed: {
    ...mapState(["usuario"]),
    compra() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado,
        },
      };
    },
  },
  methods: {
    criarTransacao() {
      return api.post("/transacao", this.compra);
    },
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch(
          "getUsuario",
          this.$store.state.usuario.email
        );
        await this.criarTransacao();
      } catch (error) {
        console.log(error);
      }
    },
    finalizarCompra() {
      if (this.$store.state.login) {
        this.criarTransacao();
      } else {
        this.criarUsuario();
      }
      this.$router.push({ name: "compras" });
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn {
  background: #e80;
}
</style>
