import { createApp } from "vue";
import { createPinia } from "pinia";

import VueSlider from "vue-slider-component";
import FloatingVue from "floating-vue";

import App from "./App.vue";
import router from "./router";

import "floating-vue/dist/style.css";
import "./assets/css/tailwind.css";

FloatingVue.options.distance = 8;
FloatingVue.options.themes.tooltip.delay.show = 1000;

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(FloatingVue);

app.component("VueSlider", VueSlider);

app.mount("#app");
