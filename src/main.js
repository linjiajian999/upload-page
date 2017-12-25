// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import {
//   MdButton,
//   MdContent,
//   MdTabs
// } from 'vue-material/dist/components'
// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import './assets/mb.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
