<template>
  <div class="app__inner">
    <div class="app__page">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  .app__inner {
    height: 100vh;
    font-family: "Noto Sans KR", sans-serif;

    .app__page {
      // border: solid 1px red;
      height: 100%;
      display:flex;
      flex-direction: column;
      align-items: center;

      // main {
      //   width: 100%;
      //   border: solid 1px black;
      // }
    }
  }

</style>