<template>
       <section>
              <h1>👍Compre ou Venda👎</h1>
              <ProductsSearch/>
              <ProductsList/>
       </section>
</template>

<script>

import ProductsSearch from '@/components/ProductSearch.vue';
import ProductsList from '@/components/ProductList.vue';

export default {
       name:"HomeView",
       components:{
              ProductsSearch,
              ProductsList
       }

}
</script>

<style scoped>
       h1{
              font-size: 2rem;
              color: #87f;
              margin-top: 40px;
              text-align: center;
       }
</style>