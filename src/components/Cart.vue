<template>
  <aside :class="storeCart.showClass">
    <div
      class="bg-blue-900 w-full shadow-black shadow-xl p-2 overflow-y-scroll"
    >
      <i
        class="pi pi-times cursor-pointer hover:opacity-50 text-white text-xl hover:text-red-500 rounded-full"
        @click="storeCart.showClass = 'w-0 opacity-0'"
      ></i>

      <div
        class="flex p-2"
        v-for="(item, index) in storeCart.cart"
        :key="index.id"
      >
        <CartItem
          :imgUrl="item.poster_path"
          :Title="item.title"
          :Index="index"
        />
      </div>
      <div class="flex flex-col items-center justify-center">
        <p
          class="text-[1.4rem] text-gray-300 font-bold"
          v-if="storeCart.priceItem"
        >
          Total: {{ storeCart.priceItem.toFixed(2) }} R$
        </p>
      </div>
    </div>
  </aside>
</template>
<script setup>
import { onMounted, ref } from "vue";

import { useCart } from "../store/cart";

import { useMovies } from "../store/movies";
import CartItem from "../components/CartItem.vue";


const storeCart = useCart();
const store = useMovies();

onMounted(() => {});
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from .v-leave-to {
  opacity: 0;
}
</style>
../store/movies
