<!--单文件组件-->
<!--router-view显示的是当前路由地址所对应的内容-->
<!--多页应用 VS 单页应用 -->
<!--多页面应用 优点：首屏时间快，SEO效果好 -->
<!--多页面应用 缺点：页面切换慢 -->
<!--多页面应用 优点：页面切换快 -->
<!--多页面应用 缺点：首屏时间稍慢，SEO差 -->
<template>
  <div>
      <home-header>header</home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style >
</style>
