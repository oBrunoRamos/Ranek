<template>
  <ul v-if="paginasTotal > 1">
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{ query: { _page: query(pagina) } }">{{
        pagina
      }}</router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: "ProdutosPaginar",
  props: {
    produtosTotal: {
      type: Number,
      default: 1,
    },
    produtosPorPagina: {
      type: Number,
      dafault: 1,
    },
  },
  computed: {
    paginas(){
      const current = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range/2);
      const total = this.paginasTotal;
      const pagesArray = [];

      for(let i = 1; i <= total; i++){
        pagesArray.push(i);
      }
      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);
      return pagesArray
    },
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
};
</script>

<style scoped>
ul{
  grid-column: 1 / -1;
}
li {
  display: inline-block;
}
li,
a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}
li,
a.router-link-exact-active,
li,
a:hover {
  background: #87f;
  color: #fff;
}
</style>
