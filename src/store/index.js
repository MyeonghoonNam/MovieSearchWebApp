import { createStore } from 'vuex'

const API_KEY = process.env.API_KEY
const API_END_POINT = process.env.API_END_POINT

export default createStore({
  state() {
    return {
      movieList: {},
      movieInfo: {}
    }
  },
  mutations: {
    updateState(state, newState) {
      Object.keys(newState).forEach(key => {
        state[key] = newState[key]    
      })

      console.log(state)
    }
  },
  actions: {
    async fetchMovieList({ commit }, data = {}) {
      const { userInput } = data
      const movieList = await fetch(`${API_END_POINT}?apikey=${API_KEY}&s=${userInput}`).then(res => res.json())

      commit('updateState', {
        movieList: movieList.Search,
      })
    },

    async fetchMovie({ commit }, data = {}) {
      const { id } = data
      const movieInfo = await fetch(`${API_END_POINT}?apikey=${API_KEY}&i=${id}&plot=full`).then(res => res.json())

      commit('updateState', {
        movieInfo
      }) 
    }
  }
})