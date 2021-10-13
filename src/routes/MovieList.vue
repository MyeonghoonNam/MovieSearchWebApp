<template>
  <main>
    <section>
      <ul
        class="movies"
      >
        <li
          v-for="movie in movieList"
          :key="movie.imdbID"
          class="movie"
          @click="fetchMovie(movie.imdbID)"
        >
          <img
            class="movie__poster"
            :src="`${movie.Poster}`"
            alt="영화 포스터"
          />
          <div class="movie__title">
            {{ movie.Title }}
          </div>
          <div class="movie__year">
            {{ movie.Year }}
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    movieList() {
      return this.$store.state.movieList
    },
    isInitialize() {
      return this.$store.state.isInitialize
    }
  },
  methods: {
    async fetchMovie(id) {
      await this.$store.dispatch('fetchMovie', { id })
      this.$router.push({ name: 'MovieInfo', params: { id } })
    }
  }
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

main {
  width: 100%;
  padding-bottom: 50px;
}

.movies {
  padding: 0 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  

  .movie {
    height: 500px;
    transition: 0.3s ease-out;
    cursor: pointer;

    &__poster {
      width: 100%;
      height: 88%;
    }

    &__title {
      padding: 0 5px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 24px;
      font-weight: bold;
    }

    &__year {
      padding: 5px;
      font-size: 20px;
    }
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 5px lightgray;
    }
  }

}
</style>