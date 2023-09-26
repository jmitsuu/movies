<template>
  <Transition>
    <aside
      class="float-right w-80 h-full flex fixed top-0 right-0"
      v-if="storeCart.cartControlModal"
    >
      <div
        class="bg-blue-900 w-full shadow-black shadow-xl p-2 overflow-y-scroll"
      >
        <i
          class="pi pi-times cursor-pointer hover:opacity-50 text-white text-xl hover:text-red-500 rounded-full"
          @click="storeCart.cartControlModal = false"
        ></i>

        <div class="flex p-2">
          <div
            class="flex w-full rounded-lg bg-slate-300 p-2 bg-opacity-40 shadow-gray-600 shadow-md"
          >
            <img
              :src="`http://image.tmdb.org/t/p/w500/${ImgUrl}`"
              class="w-16 cursor-pointer transition duration-1000 shadow hover:shadow-stone-50 rounded-md"
            />

            <h1 class="text-sm m-auto p-2 text-white font-sans">
              {{ Title }}
              {{ Price }}
            </h1>

            <i
              class="pi pi-trash cursor-pointer hover:text-red-500"
              @click="storeCart.removeItemCart(Indice)"
            >
            </i>
          </div>
        </div>
      </div>
    </aside>
  </Transition>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useCart } from "../store/cart";
const storeCart = useCart();
const props = defineProps({
  ImgUrl: String,
  Price: Number,
  Title: String,
  Indice: Number,
});

onMounted(() => {});
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from .v-leave-to {
  opacity: 0;
}
</style>
