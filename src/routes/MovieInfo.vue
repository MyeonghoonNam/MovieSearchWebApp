<template>
  <section class="movie">
    <div class="movie__info">
      <div class="">
        {{ movieInfo.Title }}
      </div>
      <div class="">
        {{ movieInfo.Released }}
      </div>
      <div class="">
        {{ movieInfo.Genre }}
      </div>
      <div class="">
        {{ movieInfo.Director }}
      </div>
      <div class="">
        {{ movieInfo.Actors }}
      </div>
      <div class="">
        {{ movieInfo.Plot }}
      </div>
    </div>
    <div class="movie__poster">
      <img
        :src="movieInfo.Poster"
        alt="영화포스터"
      />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    movieInfo() {
      return this.$store.state.movieInfo
    }
  }
}
</script>

<style scoped lang="scss">

</style>