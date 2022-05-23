import { playMode } from 'common/js/config'
import { loadSearch } from 'common/js/cache'

// 定义vuex的state
// 设置全局保存的变量
// 歌手 列表 状态 全屏 歌手列表
// 播放模式 现在的索引 
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: [],
  favoriteList: []
}

export default state