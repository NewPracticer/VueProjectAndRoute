<template>
    <div class="list" ref = "wrapper">
      <div>
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
              <div class= "button-wrapper">
               <div class= "button">北京</div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
              <div class= "button-wrapper">
               <div class= "button">北京</div>
              </div>
              <div class= "button-wrapper">
               <div class= "button">北京</div>
              </div>
              <div class= "button-wrapper">
               <div class= "button">北京</div>
              </div>
              <div class= "button-wrapper">
               <div class= "button">北京</div>
              </div>
              <div class= "button-wrapper">
               <div class= "button">北京</div>
              </div>
              <div class= "button-wrapper">
               <div class= "button">北京</div>
              </div>
              <div class= "button-wrapper">
               <div class= "button">北京</div>
              </div>
          </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0rem
    right: 0rem
    bottom: 0
    .title
      line-height: .44rem
      background: #eee
      padding-left:  .2rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        width: 33.33%
        float: left
        .button
          margin: .1rem
          text-align: center
          border: .02rem solid #ccc
          padding: .1rem
          border-radius: .05rem
    .item-list
      .item
        line-height: .76rem
        color:#666
        padding-left: .2rem
</style>
