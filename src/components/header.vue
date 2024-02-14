<template>
  <nav class="navbar navbar-light bg-light px-5">
    <div class="column-gap-3 d-flex flex-row align-items-center justify-content-center">
      <img
        src="../assets/onepiece.png"
        width="50px"
        class="imaga"
      />
      <span class="navbar-brand mb-0 h1">TechnoGear</span>
    </div>
    <span class="navbar-brand mb-0 h1">Cart({{$store.state.cart.length}})</span>
  </nav>
</template>

<script setup>
const imageUrl = new URL("/src/assets/imaga.png", import.meta.url);
</script>

<style scope>
nav {
  margin-bottom: 30px;
}

.imaga {
  border-radius: 100%;
}
</style>
