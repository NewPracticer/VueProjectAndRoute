<!--单文件组件-->
<!--router-view显示的是当前路由地址所对应的内容-->
<!--多页应用 VS 单页应用 -->
<!--多页面应用 优点：首屏时间快，SEO效果好 -->
<!--多页面应用 缺点：页面切换慢 -->
<!--多页面应用 优点：页面切换快 -->
<!--多页面应用 缺点：首屏时间稍慢，SEO差 -->
<template>
  <div>
      <home-header >header</home-header>
      <home-swiper v-bind:list="swiperList"></home-swiper>
      <home-icons v-bind:list="iconList"></home-icons>
      <home-recommend v-bind:list="recommendList"></home-recommend>
      <home-weekend v-bind:list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      console.log(res)
    }
  }
}
</script>
<style >
</style>
