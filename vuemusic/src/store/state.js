import { playMode } from 'common/js/config'
import { loadSearch } from 'common/js/cache'

// 定义vuex的state
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