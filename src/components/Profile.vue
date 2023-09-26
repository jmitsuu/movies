<template>
  <section class="flex gap-2 absolute">
    <header class="p-2 flex justify-center h-20 w-full items-center relative">
      <div class="flex items-center">
        <div>
          <div
            class="absolute h-5 w-5 border-2 border-blue-900 top-2 text-center text-xs bg-red-600 rounded-full"
            v-if="storeCart.cartCount"
          >
            {{ storeCart.cartCount }}
          </div>
        </div>

        <div>
          <div
            class="absolute h-5 w-5 border-2 border-blue-900 top-2 text-center text-xs bg-red-600 rounded-full"
            v-if="storeFav.favCount"
          >
            {{ storeFav.favCount }}
          </div>
          <BookmarkIcon
            @click="storeFav.modalFav"
            class="transition-all duration-300 mr-2 cursor-pointer h-9 p-2 rounded-md hover:bg-slate-500"
          />
        </div>

        <darkModeIcon
          class="h-9 cursor-pointer p-2 rounded-md text-yellow-600 hover:bg-slate-500"
          v-if="!iconChange"
          @click="darkMode"
        />
        <MoonIcon
          v-if="iconChange"
          class="h-9 p-2 text-blue-600 cursor-pointer rounded-md hover:bg-slate-500"
          @click="darkMode"
        />

        <span class="block md:hidden">
          <Bars4Icon
            @click="store.menuControl = true"
            class="h-9 p-2 cursor-pointer rounded-md hover:bg-slate-500"
          />
        </span>
      </div>
    </header>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  BookmarkIcon,
  SunIcon,
  MoonIcon,
  Bars4Icon,
} from "@heroicons/vue/24/outline";
import { useMovies } from "../store/movies";
import { useFav } from "../store/favFilm";
import { useCart } from "../store/cart";
const storeFav = useFav();
const store = useMovies();
const storeCart = useCart();
const iconChange = ref();
let darkModeIcon = SunIcon;

function darkMode() {
  store.isDarkmode = !store.isDarkmode;
  if (darkModeIcon == SunIcon) {
    iconChange.value = true;
    darkModeIcon = MoonIcon;
  } else {
    iconChange.value = false;
    darkModeIcon = SunIcon;
  }
}

onMounted(() => {});
</script>

<style scoped lang="scss"></style>
../store/movies
