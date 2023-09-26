import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { httpMovies } from "../https/apiMovies";
const dataInfoFilm = ref();
const dataVideo = ref();
const dataImg = ref();
const ctrlReload = ref(false);
const findTrailer = ref(true);
const details = ref();
const dataCast = ref();
const hasActor = ref(false);
const vote = ref();
export const useInfo = defineStore("useInfo", () => {
  function getInfoFilms(film) {
    if (!film) return;
    dataInfoFilm.value = film;
    ctrlReload.value = true;
    getMovieVid(film.id);
    getImages(film.id);
    credits(film.id);
    vote.value = film.vote_average;
  }
  async function getMovieVid(key) {
    getDetails(key);
    const { data } = await httpMovies.get(
      `/movie/${key}/videos?language=pt-BR`
    );

    dataVideo.value = data.results;
  }

  async function getDetails(key) {
    await httpMovies.get(`/movie/${key}?language=pt-BR`).then(({ data }) => {
      details.value = data.genres;
    });
  }
  async function credits(key) {
    await httpMovies
      .get(`/movie/${key}/credits?language=pt-BR`)
      .then(({ data }) => {
        dataCast.value = data.cast.filter((item) => {
          if (item.profile_path != null) {
            return [(data.cast.length = 5)];
          }
        });
      });
  }
  async function getImages(idImg) {
    await httpMovies
      .get(`/movie/${idImg}/images?language=pt-BR`)
      .then(({ data }) => {
        dataImg.value = data.backdrops;
        //file_path
        dataImg.value = dataImg.value.map((item) => item.file_path);
      });
  }
  return {
    getInfoFilms,
    dataInfoFilm,
    dataVideo,
    ctrlReload,
    findTrailer,
    dataImg,
    details,
    dataCast,
    hasActor,
    vote,
  };
});
