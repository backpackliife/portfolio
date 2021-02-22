import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import './scss/main.scss';
import Vuetify from "vuetify/lib";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "*", component: NotFound }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

export default new Vuetify({
  theme: { dark: true },
})
