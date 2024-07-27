import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      rua: "",
      cep: "",
      numero: "",
      estado: "",
      cidade: "",
      bairro: "",
    },
    usuario_produtos: [],
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos = payload;
    },
    ADD_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos.unshift(payload);
    },
  },
  actions: {
    getUsuarioProdutos(context) {
      // .get(`/produtos?usuario_id=${context.state.usuario.id}`)
      api.get(`/produtos`)
        .then((response) => {
          context.commit("UPDATE_USUARIO_PRODUTOS", response.data);
        });
    },
    getUsuario(context, payload) {
      return api.get(`/usuario/${payload}`).then((r) => {
        context.commit("UPDATE_USUARIO", r.data);
        context.commit("UPDATE_LOGIN", true);
        console.log("pegou");
      });
    },
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      console.log("postou");
      return api.post("/usuario", payload);
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: "",
        nome: "",
        email: "",
        senha: "",
        rua: "",
        cep: "",
        numero: "",
        estado: "",
        cidade: "",
        bairro: "",
      });
      context.commit("UPDATE_LOGIN", false);
    },
  },
  modules: {},
});
