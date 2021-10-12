<template>
  <Header />
  <main>
    <MovieList />
  </main>
</template>

<script>
import Header from '~/components/layout/Header'
import MovieList from '~/components/MovieList'

export default {
  components: {
    Header,
    MovieList
  },
  computed: {
    movieList() {
      return this.$store.state.movieList
    },
    isInitialize() {
      return this.$store.state.isInitialize
    }
  },
}
</script>