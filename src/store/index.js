import { createStore } from 'vuex'

const API_KEY = process.env.API_KEY
const API_END_POINT = process.env.API_END_POINT

export default createStore({
  state() {
    return {
      movieList: {},
    }
  },
  mutations: {
    updateState(state, newState) {
      state = {
        ...state,
        ...newState
      }
    }
  },
  actions: {
    async fetchMovieList({ commit }, data = {}) {
      const { userInput } = data
      const movieList = await fetch(`${API_END_POINT}?apikey=${API_KEY}&s=${userInput}`).then(res => res.json())

      console.log(movieList)

      commit('updateState', {
        movieList: movieList.Search,
      })
    }
  }
})