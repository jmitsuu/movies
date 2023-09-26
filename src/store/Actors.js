import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { httpMovies } from "../https/apiMovies";
const dataActors = ref();

export const useActors = defineStore("useActors", () => {
  async function getActors() {
    await httpMovies.get(`/person/popular?language=en-US&page=1`).then(({ data }) => {
      dataActors.value =  data.results.filter(item =>{

        if(!item.profile_path) return;
        return data.results
      })
      
    
    });
  }
 
  return {
    dataActors,
    getActors,
  };
});
