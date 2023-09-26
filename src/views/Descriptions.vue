<template>
  <main :class="{ dark: storePopular.isDarkmode }" class="flex-1 h-full">
    <Menu />
    <section
      class="p-14 w-full font-serif bg-gradient-to-b from-black to-via-bg-blackSite"
    >
      <div
        class="md:grid sm:w-full xl:p-7 bg-opacity-20 bg-bg-FromWhiteMode dark:bg-gradient-to-b from-black to-via-bg-blackSite"
      >
        <div
          v-for="(item, index) in [store.dataInfoFilm]"
          :key="index.id"
          class="m-auto relative"
        >
          <div
            class="w-full flex-wrap justify-center md:flex-wrap sm:flex-wrap flex bg-slate-900 p-2"
          >
            <img
              class="rounded-lg shadow-gray-600 shadow-xl xl:h-[600px] h-full"
              :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`"
            />
            <div
              class="genres relative w-[800px] bottom-0 justify-center p-4 flex flex-col"
            >
              <p
                class="text-white font-serif md:text-[2.2rem] text-[1.2rem] xl:text-[3.1rem] text-center"
              >
                {{ item.title }}
              </p>
              <p
                class="xl:text-[1.1rem] text-gray-300 text-[0.6rem] md:text-[1.1rem] text-center"
              >
                {{ item.overview }}
              </p>

              <div class="items-center md:flex flex-col">
                <div class="flex flex-wrap xl:absolute bottom-0 left-2">
                  <div
                    v-for="(item, index) in store.dataCast"
                    :key="index.id"
                    class="p-2 text-center"
                  >
                    <img
                      class="shadow-xl w-20 sm:w-[80px] md:w-[60px] bg-center sm:grid sm:grid-cols-2"
                      :src="`https://image.tmdb.org/t/p/w200/${item.profile_path}`"
                    />
                    <p class="text-[0.6rem] text-gray-300">{{ item.name }}</p>
                  </div>
                </div>
                <div class="xl:absolute right-0 bottom-2 flex items-center">
                  <span class="relative">
                    <Chart
                      type="doughnut"
                      :data="chartData"
                      :options="chartOptions"
                      class="w-24 md:w-30rem"
                    />
                    <p
                      class="text-yellow-700 font-sans top-10 absolute left-9 text-center"
                    >
                      {{ store.vote.toFixed(1) * 10 }}%
                    </p>
                  </span>
                  <div class="p-1 border-l-2 ml-2 pl-4">
                    <h1 class="text-orange-700 text-[1.3rem]">Genero</h1>
                    <p
                      class="xl:text-[0.9rem] block text-gray-200"
                      v-for="(items, index) in store.details"
                      :key="index.id"
                    >
                      {{ items.name }}
                    </p>
                    <span
                      class="text-sm text-center font-mono font-bold float-left border-t-2 mt-4 text-gray-50"
                    >
                      {{ item.first_air_date || item.release_date }}</span
                    >
                  </div>
                </div>

                <i
                  class="pi pi-bookmark-fill text-xl text-white absolute top-0 right-2 cursor-pointer mt-2 hover:text-gray-800 stroke-1 hover:stroke-2"
                  @click="storeFav.incrementFav(item)"
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap mt-9">
          <div
            v-for="(item, index) in store.dataVideo"
            :key="index.id"
            class="flex justify-center items-center"
          >
            <iframe
              class="p-5 items-center w-[250px] h-[250px] sm:w-[400px] sm:h-[305px]"
              :src="`https://www.youtube.com/embed/${item.key}`"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="1"
            >
            </iframe>
          </div>
        </div>
      </div>
      <routerLink to="/Movies">
    <p class="cursor-pointer text-gray-100  left-4 top-20 z-20 text-lg  border-white rounded-full p-3">Voltar</p>
      </routerLink>
    </section>
    <Fav />
  </main>
</template>
<script setup>
import Menu from "../components/Menu.vue";
import { useMovies } from "../store/movies";
import { ref, onMounted } from "vue";
import Fav from "../components/Fav.vue";
import { useInfo } from "../store/infoFilm";
import { useFav } from "../store/favFilm";
import Chart from "primevue/chart";
const storeFav = useFav();
const store = useInfo();
const storePopular = useMovies();
const chartData = ref();
const votePerc = ref([]);
const chartOptions = ref({
  cutout: "80%",
});

function recarrega() {
  if (store.ctrlReload == true) {
    return;
  } else {
    window.location.href = "/Movies";
  }
}
window.addEventListener("beforeunload", recarrega());

const setChartData = () => {
  return {
    labels: [],
    datasets: [
      {
        data: votePerc.value,
        backgroundColor: ["black", "yellow"],
      },
    ],
  };
};

function backReloadPage() {
  window.location.href = "/Movies";
}
onMounted(() => {
  store.getInfoFilms();
  chartData.value = setChartData();

  votePerc.value.push(store.vote * 10 - 100, store.vote * 10);
});
</script>
../store/movies
