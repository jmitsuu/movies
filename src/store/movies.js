import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";
import { httpMovies } from "../https/apiMovies";
const dataMovies = ref();
const highRate = ref();
const menuControl = ref(false);
const moviesPlaying =ref()
const totalPlaying = ref();
const dataGenreList = ref();
const dataUpComing = ref();
const upComingRated = ref();
const dataTrending = ref();
const loadApiPlaying = ref();
const loadApiUp = ref();
const idCheck = ref();
const Page = ref(1);
const count = ref();
const hasMoreData = ref(false);
const isDarkmode = ref(true);
const hiddenOfSearch = ref(true);
const reloadMovies = ref()
const darkModeIcon = ref("pi pi-sun hover:text-yellow-500");
const textLoad = ref("Ver Mais");
const inputText = ref();
export const useMovies = defineStore("useMovies", () => {
  //popular
  async function getPopularMovies() {
    try {
    setTimeout(async ()=>{
      const { data } = await httpMovies.get(
        `/movie/popular?language=pt-BR`,
        {
          params: {
            page: Page.value,
          },
        }
      );
      menuControl.value = false;
      dataMovies.value = data.results;
      idCheck.value = data.results.map((item) => item.genre_ids);
    },200)
    } catch (error) {
      console.log(error.response);
    }
  }

  async function getPlayingNow() {
    try {
      setTimeout(async ()=>{
        const { data } = await httpMovies.get(
          `/movie/now_playing?language=pt-BR`,
          {
            params: {
              page: Page.value,
            },
          }
        );
        menuControl.value = false;
        moviesPlaying.value = data.results;
        reloadMovies.value = data.results;
        idCheck.value = data.results.map((item) => item.genre_ids);
  
        loadApiPlaying.value = true
      },200)

      loadApiPlaying.value = false;
    } catch (error) {
      console.log(error.response);
    }
  }

  const searchMovie = computed(() => {
    if (moviesPlaying.value && inputText.value) {
      hiddenOfSearch.value = false;
      moviesPlaying.value = moviesPlaying.value.filter((item) => {
        return item.title.toLowerCase().includes(inputText.value.toLowerCase());
      });
    } else {
      moviesPlaying.value = reloadMovies.value;
      hiddenOfSearch.value = true;
      inputText.value = "";
    }
    return moviesPlaying.value;
  });

  //loadMore
  async function loadMore() {
    try {
      textLoad.value = "Carregando...";
      hasMoreData.value = true;
      nextPage();
      const { data } = await httpMovies.get(
        `/movie/now_playing?language=pt-BR`,
        {
          params: {
            page: Page.value,
          },
        }
      );
      const newItems = data.results;
      reloadMovies.value = moviesPlaying.value.concat(newItems);
      console.log(moviesPlaying.value)
      count.value = moviesPlaying.value.length;
      hasMoreData.value = false;
      textLoad.value = "Ver Mais";

    } catch (error) {
      console.log(error.response);
    }
  }

  //genres
  async function getGenres(id) {
    try {
      getPopularMovies();
      const { data } = await httpMovies.get(`/genre/movie/list?language=pt-BR`);
      dataGenreList.value = data.genres;
      if (!id) return;

      dataMovies.value = dataMovies.value.filter((item) => {
        return item.genre_ids.includes(id.id);
      });
    } catch (error) {
      console.log(error.response);
    }
  }
  async function getTrendingMovies() {
    try {
      await httpMovies
        .get(`/trending/all/day?language=pt-BR`)
        .then(({ data }) => {
          dataTrending.value = data.results;

          // upComingRated.value =
          data.results.length = 10;
          upComingRated.value = data.results.filter((item) => {
            if (!item.release_date) {
              item.release_date = "Sem data.";
            }
            if (item.vote_average >= 7.0) return item.vote_average;
          });

          highRate.value = upComingRated.value.length;
        });
    } catch (error) {
      console.log(error.response);
    }
  }

  function darkMode() {
    isDarkmode.value = !isDarkmode.value;
    if (darkModeIcon.value == "pi pi-sun hover:text-yellow-500") {
      darkModeIcon.value = "pi pi-moon";
    } else {
      darkModeIcon.value = "pi pi-sun hover:text-yellow-500";
    }
  }

  function nextPage() {
    Page.value++;
  }

  return {
    darkMode,
    getPopularMovies,
    getGenres,
    getPlayingNow,
    getTrendingMovies,
    loadMore,
    loadApiUp,
    dataGenreList,
    loadApiPlaying,
    dataMovies,
    totalPlaying,
    moviesPlaying,
    count,
    Page,
    highRate,
    menuControl,
    inputText,
    dataUpComing,
    upComingRated,
    dataTrending,
    hasMoreData,
    isDarkmode,
    darkModeIcon,
    textLoad,
    searchMovie,
    hiddenOfSearch,
  };
});
