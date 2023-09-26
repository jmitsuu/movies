<template>
  <nav
    class="bg-gradient-to-b bg-black bg-opacity-95 shadow-black shadow-md flex h-14 w-full items-center text-white"
  >
    <ul class="justify-start hidden sm:flex">
      <li
        v-for="(item, index) in menuItems"
        :key="index.id"
        class="border-gray-300 active:text-purple-600"
      >
        <router-link
          :to="item.name"
          class="text-left p-2 flex text-white rounded-sm cursor-pointer"
        >
          <PlayCircleIcon class="h-6" /> {{ item.title }}
        </router-link>
      </li>
    </ul>

    <div
      class="h-20 w-52 top-0 right-0 fixed rounded-l-lg bg-gradient-to-b from-black to-gray-800 items-center text-white"
      v-if="store.menuControl"
    >
      <li
        v-for="(item, index) in menuItems"
        :key="index.id"
        class="list-none hover:bg-slate-500 p-2 w-full rounded-md text-white"
      >
        <router-link :to="item.name" class="text-left p-2 flex">
          <PlayCircleIcon class="h-6" /> {{ item.title }}
        </router-link>
      </li>
    </div>
    <Transition>
    <div class="mx-auto ml-6  sm:w-auto items-center flex">

        <input
          v-if="openSearch"
          v-model="store.inputText"
          type="text"
          placeholder="Procurar..."
          class="rounded-md bg-blue-900 w-[150px]  sm:w-full bg-opacity-20 text-white p-2"
        />


      <MagnifyingGlassIcon
        v-if="!openSearch"
        @click="!openSearch ? (openSearch = true) : (openSearch = false)"
        class="text-white w-5 cursor-pointer"
      />
      <XMarkIcon
        v-if="openSearch"
        @click="clearInput"
        class="text-white w-5 cursor-pointer"
      />
    </div>
  </Transition>
    <Profile class="right-0" />
    <Cart />
  </nav>
</template>

<script setup>
import Profile from "./Profile.vue";
import Cart from "../components/Cart.vue";
import { ref } from "vue";
import { useMovies } from "../store/movies";
import {
  PlayCircleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/vue/24/solid";
const store = useMovies();
const props = defineProps({
  textTitle: String,
});
const openSearch = ref(false);
const inputText = ref("");
const menuItems = ref([
  {
    id: 2,
    name: "Movies",
    title: "Filmes",
  },
]);
function clearInput() {
  store.inputText = "";
  openSearch.value = false;
}
inputText.value = props.textTitle;
</script>

<style>
.active {
  color: #414141;
  opacity: 90%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from .v-leave-to {
  opacity: 0;
}

.Firstchild:hover .Secchild {
  display: block;
}

</style>
