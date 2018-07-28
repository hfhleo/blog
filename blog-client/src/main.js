import Vue from "vue"
import VueLazyload from 'vue-lazyload'
import createRouter from "./router"
import createStore from "./store"

import "./assets/styles/base.sass";
import App from "./App.vue";

Vue.use(VueLazyload, {
  loading: require('./assets/imgs/loading.gif'),
  error: require('./assets/imgs/error.png')
})

export default function createApp() {
  const router = new createRouter();
  const store = new createStore();
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}