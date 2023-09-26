import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { httpMovies } from "../https/apiMovies";
const fav = ref([]);
const favControlModal = ref();
const favCount = ref();
const notification = ref(false);
const typeRequestName = ref();

export const useFav = defineStore("useFav", () => {
  typeRequestName.value == true ? "Seriado" : "Filme";
  function incrementFav(items) {
    if (!items) return;

    const findItem = fav.value.findIndex((item) => item.id == items.id);
    console.log(items)
    if (findItem >= 0) return;
    fav.value.push(items);
    const count = new Set(fav.value);
    const newMovie = count.size;
    favCount.value = newMovie;
    notification.value = true;
    setTimeout(() => {
      notification.value = false;
    }, 2000);
  }

  function removeItemFav(index) {
    favCount.value--;
    favCount.value < 1 ? (favControlModal.value = false) : "";
    fav.value.splice(index, 1);
  }
  function modalFav() {
    fav.value.length <= 0
      ? (favControlModal.value = false)
      : (favControlModal.value = true);
  }
  return {
    modalFav,
    incrementFav,
    removeItemFav,
    fav,
    favControlModal,
    favCount,
    notification,
    typeRequestName,
  };
});
