<template>
  <ul v-if="!isInitialize">
    <li
      v-for="movie in movieList"
      :key="movie.imdbID"
    >
      {{ movie.Title }}
    </li>
  </ul>
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
}
</script>

<style scoped lang="scss">
ul {
  width: 100%;
  border: solid 1px black;
}
</style>