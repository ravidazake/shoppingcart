<template>
  <div id="app">
    <Header></Header>
    <div class="mx-3">
      <div class="w-100 d-flex flex-col m-0 p-0 position-relative">
        <div class="w-75 col-9 m-0 p-0">
          <ProductList></ProductList>
        </div>
        <div class="w-25 col-3 m-0 p-0">
          <Cart></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
import ProductList from "./components/productList.vue";
import Cart from "./components/cart.vue";
</script>

<!-- <template class="w-100">
  <div class="w-100 flex bg-secondary m-0 p-0">
    <Header></Header>
  </div>
    
</template> -->

<style scoped>
</style>
