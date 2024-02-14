<template>
    <div v-for="item in $store.state.cart" :key="item.id">
        <ul class="list-group mt-2">
            <li class="list-group-item d-flex flex-row align-items-start justify-content-between m-0 p-2">
                <div class="media d-flex flex-row align-items-center m-0 p-0 column-gap-4">
                    <img width="80px" :src="item.imgUrl" class="mr-5" alt="" />
                    <div class="media-body">
                        <p class="mt-0">{{ item.title }}</p>
                        <div class="d-flex flex-row align-items-center justify-content-center bodtest">
                            <button class="close me-2" @click="$store.dispatch('decQty', item)">-</button>
                            {{ item.quantity }}
                            <button class="close ms-2" @click="$store.dispatch('incQty', item)">+</button>
                        </div>
                    </div>
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    @click="$store.dispatch('delCart', item)">
                    <span aria-hidden="true" class="p-0 m-0">&times;</span>
                </button>
            </li>
        </ul>
    </div>
    <button type="button" class="checkout" @click="$store.dispatch('checkout')">Checkout</button>
</template>

<script setup></script>

<style scoped>
.btn-qty {
    border-radius: 50%;
    width: 30px;
}

.bodtest {
    width: fit-content;
}

.media-body {
    text-align: left;
}

.media {
    width: 90%;
}

.checkout {
    display: flex;
    flex-direction: row;
    padding: auto;
    height: fit-content;
    width: fit-content;
    margin: 0;
    border: 1px solid lightslategray;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}
.close {
    display: flex;
    flex-direction: row;
    padding: auto;
    height: 20px;
    width: 20px;
    margin: 0;
    border: 1px solid lightslategray;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
}
</style>