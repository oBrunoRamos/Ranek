<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
      <img
        v-if="product.pictures"
        :src="product.pictures[0].src"
        :alt="product.pictures[0].title"
      />
      <p class="price">{{ product.price }}</p>
      <h2 class="title">{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </div>
    {{ url }}
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "ProductList",
  data() {
    return {
      products: null,
    };
  },
  methods: {
    getProducts() {
      api.get(this.url).then((response) => {
        this.products = response.data;
        console.log(response.data);
      });
    },
  },
  watch:{
    url(){
      this.getProducts();
    }
  },
  computed: {
    url() {
      let queryString =""
      for (let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }
      return "/product/?_limit=10" + queryString;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
