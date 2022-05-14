import Vue from 'vue'
import App from './App.vue'
import FA from './fontawesome.js'

Vue.component('font-awesome-icon', FA.FontAwesomeIcon)
Vue.component('font-awesome-layers', FA.FontAwesomeLayers)

Vue.config.productionTip = true

new Vue({
  render: (h) => h(App),
}).$mount('#app')
