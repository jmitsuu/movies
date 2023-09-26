<template>
  <div class="">

    <div class="h-full w-full m-auto p-2">
      <div
        :class="'Firstchild relative scale-90 transition duration-300  rounded-sm hover:opacity-80 '"
      >
        <div class="relative flex">
          <router-link to="/Descriptions">
          
            <img
              :class="
                !props.imgUrl
                  ? 'opacity-0'
                  : 'relative opacity-100 shadow-lg bg-red-400  hover:shadow-red-500 w-[400px] sm:w-[600px] xl:w-[300px] rounded-md transition-all duration-800'
              "
              :src="`https://image.tmdb.org/t/p/w500/${props.imgUrl}`"
              @click="storeInfo.getInfoFilms(props.getInfo)"
            />
          </router-link>
        </div>

        <i
          class="Secchild pi pi-star-fill text-yellow-300 pr-1 scale-75 text-md bg-slate-800 p-2 absolute top-0 bg-opacity-50 rounded-md right-0"
        >
          {{ vote.toFixed(0) }}%</i
        >
        <i
  
          class="pi pi-bookmark-fill text-xl text-white absolute top-0 cursor-pointer mt-2  hover:text-gray-800 stroke-1 hover:stroke-2"
          @click="storeFav.incrementFav(props.incrItem)"
        ></i>
        <div class="text-center block">
          <p
            class="text-xs text-gray-200 absolute bottom-2 right-2 p-2 bg-bg-blackSite rounded-md bg-opacity-75"
          >
            {{ props.dataMovie }}
          </p>
          <p class="text-sm text-gray-200 absolute top-10 hidden">
            {{ props.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useInfo } from "../store/infoFilm";
import { useFav } from "../store/favFilm";
import { useMovies } from "../store/movies";
import { ref, onMounted } from "vue";
const storeInfo = useInfo();
const storeFav = useFav();
const store = useMovies();
const itemPrice = ref();
const hoverTitle = ref(false);
const props = defineProps({
  imgUrl: String,
  getInfo: Array,
  vote: Number,
  incrItem: Object,
  dataMovie: String,
  price: Number,
  title: String,
  itemPrice: Number,
  itemCart: String,
});
function findPrices() {
  itemPrice.value = (Math.random() * (10 - 100) + 100).toFixed(2);
}
findPrices();
onMounted(() => {
  findPrices();
});
</script>
<style scoped></style>
../store/movies
