import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  products: mock,
  cart: [],
  cartSize: 0,
  location: {latitude: 40.2499102, longitude: -111.6521615},
  key: "d470f6b8-2b99-4367-bc3d-5c28483cd594"
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')