<template>
  <form>
    <input name="search" id="search" type="text" v-model="search" />
    <input
      type="submit"
      id="magnifyingGlass"
      value="Buscar"
      @click.prevent="browseProducts"
    />
  </form>
</template>

<script>
export default {
  name: "ProductsSearch",
  data() {
    return {
      search: null,
    };
  },
  
  methods: {
    browseProducts() {
      this.$router.push({
        query: {
          q: this.search,
        },
      });
    },
  },
};
</script>

<style></style>
