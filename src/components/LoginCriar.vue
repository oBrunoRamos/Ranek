<template>
  <section>
    <h2>Crie a Sua Conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">
        Criar Conta
      </button>
      <UsuarioForm v-else>
        <button class="btn btn-form" @click.prevent="criarUsuario">
          Criar Usuário
        </button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "./UsuarioForm.vue";

export default {
  name: "LoginCriar",
  data() {
    return {
      criar: false,
    };
  },
  components: {
    UsuarioForm,
  },
  methods: {
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        this.$store.dispatch("logarUsuario", this.login).then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.btn-form {
  max-width: 100%;
}
</style>
