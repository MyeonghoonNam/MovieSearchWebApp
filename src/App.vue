<template>
  <div class="app__inner">
    <div class="app__page">
      <Header />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
import Header from '~/components/layout/Header'

export default {
  components: {
    Header
  }  
}
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  .app__inner {
    height: 100vh;
    font-family: "Noto Sans KR", sans-serif;

    .app__page {
      height: 100%;
      display:flex;
      flex-direction: column;
      align-items: center;

      main {
        width: 100%;
      }
    }
  }

</style>