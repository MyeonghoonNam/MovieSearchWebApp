<template>
  <section class="movie">
    <div class="movie__info">
      <div class="info title">
        {{ movieInfo.Title }}
      </div>
      <div class="info">
        <span>개봉일</span> {{ movieInfo.Released }}
      </div>
      <div class="info">
        <span>장르</span> {{ movieInfo.Genre }}
      </div>
      <div class="info">
        <span>감독</span> {{ movieInfo.Director }}
      </div>
      <div class="info">
        <span>배우</span> {{ movieInfo.Actors }}
      </div>
      <div class="info">
        <span>줄거리</span><br /><br />{{ movieInfo.Plot }}
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
  .movie {
    padding: 0 50px;
    display: flex;
    justify-content: center;

    .movie__info {
      width: 400px;
      font-size: 14px;

      .info {
        margin: 10px;
        padding: 5px 0;

        span {
          font-size: 18px;
          font-weight: bold;
        }
      }
      
      .title {
        font-size: 40px;
        font-weight: bold;
      }
    }

    .movie__poster {
      width: 400px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

</style>