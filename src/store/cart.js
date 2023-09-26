import { defineStore } from "pinia";
import { ref, computed } from "vue";

const cart = ref([]);
const cartControlModal = ref();
const cartCount = ref();
const notification = ref(false);
const typeRequestName = ref();
const price = ref([]);
const findPrice = ref();
const priceItem = ref();
const soma = ref();
const textDesc = ref();
const textControl = ref(false);
const increPrice = ref([]);
const showClass = ref(
  " float-right w-0 opacity-0 h-full flex fixed top-0 right-0 transition-all duration-200"
);
export const useCart = defineStore("useCart", () => {
  function incrementCart(items, filmPrice) {
    if (!items) return;
    const attPrice = parseFloat(filmPrice);
    const findItem = cart.value.findIndex((item) => item.id == items.id);
    if (findItem >= 0) return;
    cart.value.push(items);
    const count = new Set(cart.value);
    const newMovie = count.size;
    cartCount.value = newMovie;
    notification.value = true;
    setTimeout(() => {
      notification.value = false;
    }, 2000);
    localStorage.setItem("dataCart", JSON.stringify(attPrice));

    getPricefromMovies(attPrice);

  }


  function getPricefromMovies(id) {
    const forPrices = parseFloat(id);
    price.value.push(forPrices);
    soma.value = price.value.reduce((acumulador, valor) => acumulador + valor);
    priceItem.value = soma.value;
  
  }

  function removeItemCart(index) {
    cartCount.value--;
    cartCount.value < 1
      ? (showClass.value = "hidden transition-all duration-700")
      : "";
    cart.value.splice(index, 1);
    price.value.splice(index, 1);
    soma.value = price.value.reduce((acumulador, valor) => acumulador + valor);
    priceItem.value = soma.value;
  }
  function modalCart() {
    cart.value.length <= 0
      ? (showClass.value = "hidden transition-all duration-200" )
      : (showClass.value ="float-right w-80 h-full flex fixed top-0 right-0 transition-all duration-200");

  }
//buyCart


  return {
    incrementCart,
    removeItemCart,
    modalCart,
    getPricefromMovies,
    findPrice,
    priceItem,
    price,
    cart,
    cartControlModal,
    cartCount,
    notification,
    typeRequestName,
    textDesc,
    textControl,
    increPrice,
    showClass,

  };
});
