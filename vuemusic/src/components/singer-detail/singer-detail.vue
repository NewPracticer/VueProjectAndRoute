<template>
  <!-- 转场动画 -->
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>
<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import { getSingerDetail } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import { createSong, isValidMusic, processSongsUrl } from 'common/js/song'
  // 取数据的语法糖
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        // 获取歌手详情接口报错。404
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            processSongsUrl(this._normalizeSongs(res.data.list)).then((songs) => {
              this.songs = songs
            })
          }
        })
      },
      // 遍历song的数据
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (isValidMusic(musicData)) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>