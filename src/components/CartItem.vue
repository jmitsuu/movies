<template>
  <div class="flex p-2 w-full relative">
    <div class="flex w-full rounded-lg bg-slate-300 p-2 bg-opacity-40 shadow-gray-600 shadow-md">
      <img :src="`http://image.tmdb.org/t/p/w500/${imgUrl}`"
        class="w-16 cursor-pointer transition duration-1000 shadow hover:shadow-stone-50 rounded-md" />

      <h1 class="text-sm m-auto p-2 text-white font-sans">
        {{ Title }}
      </h1>

      <i class="pi pi-trash cursor-pointer hover:text-red-500" @click="storeCart.removeItemCart(Index)">
      </i>
      <p class="absolute bottom-2 right-4 text-gray-200 font-sans font-semibold">
        {{ dataCart.toFixed(2) }} R$
      </p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useCart } from "../store/cart";
import ListMovies from "../components/ListMovies.vue";
import { useMovies } from "../store/movies";

const storeCart = useCart();
const store = useMovies();
let price = "";
const client = ref([]);
let newItem = [];
const props = defineProps({
  imgUrl: String,
  Title: String,
  Price: Number,
  Index: Number,
});

const data = localStorage.getItem("dataCart");
const dataCart = JSON.parse(data);

onMounted(() => { });
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
