<template>
       <section class="products-container">
             <div v-for="product in products" :key="product.id">
                     <h2 class="title"></h2>
             </div>
       </section>
</template>

<script>
export default {
       name:"ProductList",
       data(){
              return{
                     products: null
              }
       },
       methods:{
              getProducts(){
                     fetch("http://localhost:3000/product")
                     .then( response => response.json() )
                     .then( response =>{
                            this.products = response;
                     });
              }
       },
       created(){
              this.getProducts();
       }
}
</script>

<style>

</style>