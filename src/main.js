import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './registerServiceWorker'
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
