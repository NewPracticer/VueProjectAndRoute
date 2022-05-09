// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入fastclick解决移动的点击300毫秒延迟问题
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 因为移动端设备分辨率高，所以H5中的1px到移动端上后，变粗了；
// 解决方法：
// 1.通过媒体查询判断出移动端设备
// 2.使用transform将1px实线缩放
import './assets/styles/border.css'

import './assets/styles/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'

import 'babel-polyfill'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同返回不同的内容给用户
