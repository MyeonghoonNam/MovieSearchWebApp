<template>
  <header>
    <div class="title">
      <div class="title--light">
        무슨 영화를
      </div>
      <div class="title--bold">
        찾고 계신가요 ?
      </div>
    </div>
    
    <form class="search">
      <div class="search__inner">
        <input
          type="text"
          placeholder="검색어를 입력하세요..."
        />
      </div>
      <button class="submit">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></g>
        </svg>
      </button>
    </form>
  </header>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

header {
  width: 35%;
  margin: 100px 0;
  flex-direction: column;
  justify-content: center;

  .title {
    width: 100%;
    font-size: 36px;

    &--light {
      font-weight: lighter;
    }

    &--bold {
      padding-top: 8px;
      font-weight: bold;
    }
  }

  .search {
    width: 100%;
    height: 40px;
    margin-top: 40px;
    display: flex;

    &__inner {
      flex-grow: 1;

      input {
        width: 100%;
        height: 40px;
        margin: 0;
        padding: 0 8px;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 4px 0 0 4px;
        font-size: 16px;
      }
    }

    button {
      width: 64px;
      height: 40px;
      outline: none;
      border: 1px solid #ccc;
      border-left: none;
      border-radius: 0 4px 4px 0;
      background-color: #F8F8F8;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>