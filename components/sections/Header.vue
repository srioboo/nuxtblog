<template>
  <header
    class="header flex justify-between justify-items-center flex-wrap p-3 text-gray-500 border-solid border-b border-gray-500"
  >
    <div class="header__logo font-bold">
      <a href="/" class="no-underline">Inicio</a>
    </div>

    <div id="navmenu" class="header__navmenu font-bold">
      <ul class="flex list-none">
        <!-- <li class="mr-6"><SectionsSearch /></li>
        <li class="mr-6">
          <a href="/year-archive">Posts</a>
        </li> -->
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// @import '~/assets/css/_base.scss';

.header {
  // display: flex;
  // justify-items: center;
  // justify-content: space-between;
  // flex-wrap: wrap;
  // padding: 0.75rem;
  // color: $grey-semi;
  // border-bottom: 1px solid $grey-semi;
  // align-items: center;

  // height: $he-header;

  .header__burger {
    flex-wrap: wrap;
    justify-content: justify-around;
    width: 10px;
    height: 8px;
    align-items: center;
    align-self: center;

    .burger-line {
      // background-color: $grey-semi;
      height: 1px;
      width: 1px;
    }
  }

  .header__logo {
    // font-weight: bold;
    // color: $grey-semi;
    //a {
    //  text-decoration: none;
    //}
  }

  .header__navmenu {
    // font-weight: bold;
    // color: $grey-dark;
  }
}
</style>
