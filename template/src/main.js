// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use(VueExtendLayout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout
})
