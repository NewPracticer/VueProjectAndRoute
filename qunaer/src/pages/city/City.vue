<template>
    <div>
        <city-header></city-header>
        <city-search :cities = 'cities'></city-search>
        <city-list :cities = 'cities' :hotCities= 'hot' :letter = 'letter'></city-list>
        <city-alphabet :cities = 'cities' @change="handleLetterChange" ></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hot: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hot = data.hotCities
      }
    },
    handleLetterChange (e) {
      this.letter = e
      console.log('触发字母', e)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>

</style>
