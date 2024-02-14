<template>
  <div class="w-100 flex d-flex align-items-start justify-content-evenly column-gap-2 row-gap-2 flex-wrap">
    <div class="card m-2 p-2 pt-4" style="width: 15rem height: 15rem" v-for="item in $store.state.products"
      :key="item.id">
      <img :src="item.imgUrl" class="card-img-top imgoo" :alt="item.title" />
      <div class="card-body">
        <p class="card-title d-flex justify-content-center">{{ item.title }}</p>
        <p class="card-text d-flex justify-content-center">$ {{ item.price }}</p>
        <div class="d-flex align-items-center justify-content-center">
          <button class="btn btn-primary self-center" @click="$store.dispatch('addToCart', item)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.card {
  width: 300px;
  height: 300px;
  border: 1px solid lightgray;
}

.imgoo {
  align-self: center;
  object-fit: contain;
  width: 150px;
  height: 150px;
}
</style>