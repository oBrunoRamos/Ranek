<template>
  <form>
    <div class="usuario" v-if="mostarDadosLogin">
      <label for="nome">Nome</label>
      <input type="text" name="nome" id="nome" v-model="nome" />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="senha" />
    </div>
    <label for="cep">Cep</label>
    <input
      type="text"
      name="cep"
      id="cep"
      v-model="cep"
      @keyup="preecherCep()"
    />
    <label for="rua">Rua</label>
    <input type="text" name="rua" id="rua" v-model="rua" />
    <label for="numero">Numero</label>
    <input type="text" name="numero" id="numero" v-model="numero" />
    <label for="bairro">Bairro</label>
    <input type="text" name="bairro" id="bairro" v-model="bairro" />
    <label for="estado">Estado</label>
    <input type="text" name="estado" id="estado" v-model="estado" />
    <label for="cidade">Cidade</label>
    <input type="text" name="cidade" id="cidade" v-model="cidade" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers";
import { getCep } from "@/services";

export default {
  name: "UsuarioForm",
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "rua",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado",
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    }),
    mostarDadosLogin() {
      return !this.$store.state.login || this.$route.name === "usuario-editar";
    },
  },
  methods: {
    preecherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then((response) => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.cidade = response.data.localidade;
          this.estado = response.data.uf;
        });
      }
    },
  },
};
</script>

<style scoped>
form,
.usuario {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.usuario{
  grid-column: 1/3;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
