<template>
  <Transition>
    <aside class="float-right w-80 h-full flex fixed top-0 right-0" v-if="store.favControlModal">
      <div class="bg-neutral-900 w-full shadow-black shadow-xl p-2 overflow-y-scroll">
        <i class="pi pi-times cursor-pointer hover:opacity-50 text-white text-xl hover:text-red-500 rounded-full"
          @click="store.favControlModal = false"></i>

        <div class="flex p-2" v-for="(item, index) in store.fav" :key="index.id">
          <div class="flex w-full rounded-lg bg-slate-300 p-2 bg-opacity-40 shadow-gray-600 shadow-md">
            <img :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`"
              class="w-16 cursor-pointer transition duration-1000 shadow hover:shadow-stone-50 rounded-md" />

            <h1 class="text-sm m-auto p-2 text-white font-sans">
              {{ item.title }}

              {{ item.name }}
            </h1>
            <i class="pi pi-trash cursor-pointer hover:text-red-500" @click="store.removeItemFav(index)">
            </i>
          </div>
        </div>
      </div>
    </aside>
  </Transition>
</template>
<script setup>
import { onMounted } from "vue";
import { useFav } from "../store/favFilm";

const store = useFav();
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
