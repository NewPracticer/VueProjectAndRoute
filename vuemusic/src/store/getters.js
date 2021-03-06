import Song from 'common/js/song'

// 取数据 
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

// 当前的播放的歌
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory

export const playHistory = (state) => {
  return state.playHistory.map((song) => {
    return new Song(song)
  })
}

export const favoriteList = (state) => {
  return state.favoriteList.map((song) => {
    return new Song(song)
  })
}
