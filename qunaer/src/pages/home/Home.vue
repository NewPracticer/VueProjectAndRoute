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
  </div>
</template>
<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
<style >
</style>
