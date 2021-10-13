import { createStore } from 'vuex'

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
    }
  },
  actions: {
    async fetchMovieList({ commit }, data = {}) {
      const { userInput } = data
      const movieList = await _request({
        s: userInput,
        method: 'GET'
      })

      commit('updateState', {
        movieList: movieList.Search,
      })
    },

    async fetchMovie({ commit }, data = {}) {
      const { id } = data
      const movieInfo = await _request({
        i: id,
        plot: 'full',
        method: 'GET'
      })

      commit('updateState', {
        movieInfo
      }) 
    }
  }
})

async function _request(options) {
  return await fetch('/.netlify/functions/serverless', {
    method: 'POST',
    body: JSON.stringify(options)
  }).then(res => res.json())
}