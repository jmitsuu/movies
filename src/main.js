import { createApp } from "vue";
import "./index.css";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import FutureSlider from "vue-future-slider";
import PrimeVue from "primevue/config";
import "vue-future-slider/dist/vue-future-slider.css";

const pinia = createPinia();

const app = createApp(App);
app.use(PrimeVue);
app.use(FutureSlider);
app.use(pinia);
app.use(router);
app.mount("#root");
