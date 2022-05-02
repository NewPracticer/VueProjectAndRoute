<template>
    <div class = "header">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          请输入城市/景点/游玩主题
        </div>
        <router-link to ='/city'>
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang = "stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display: flex
    color:#fff
    background: $bgColor
    line-height: 0.86rem
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      padding-left:.2rem
      flex:1
      height: 0.64rem
      line-height:0.64rem
      margin-top: 0.12rem
      margin-bottom: 0.12rem
      margin-left: 0.2rem
      background: #fff
      border-radius:0.1rem
      color: #ccc
    .header-right
      color: #fff
      width 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .2rem
</style>
