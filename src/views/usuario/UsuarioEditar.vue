<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar Usuário</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import { api } from "@/services.js";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm,
  },
  methods: {
    atualizarUsuario() {
      api
        .put(
          `/usuario`,
          this.$store.state.usuario
        )
        .then(() => this.$store.dispatch("getUsuario"))
        .then(() => this.$router.push({ name: "usuario" })).catch( error => console.log(error));
    },
  },
};
</script>

<style></style>
