<template>
  <header class="header">
    <div class="header__logo">
      <a href="/">Inicio</a>
    </div>

    <div id="navmenu" class="header__navmenu">
      <ul>
        <li><SectionsSearch /></li>
        <li>
          <a href="/year-archive">Posts</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '~/assets/css/_base.scss';

.header {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.75rem;
  color: $grey-semi;
  border-bottom: 1px solid $grey-semi;
  align-items: center;

  height: $he-header;

  .header__burger {
    flex-wrap: wrap;
    justify-content: justify-around;
    width: 10px;
    height: 8px;
    align-items: center;
    align-self: center;

    .burger-line {
      background-color: $grey-semi;
      height: 1px;
      width: 1px;
    }
  }

  .header__logo {
    font-weight: bold;
    color: $grey-semi;
    a {
      text-decoration: none;
    }
  }

  .header__navmenu {
    font-weight: bold;
    color: $grey-dark;

    ul {
      display: flex;
      list-style: none;
      li {
        margin-right: 1.5rem;
        a {
          text-decoration: none;
          color: $grey-dark;
          &:hover {
          }
        }
      }
    }
  }
}
</style>
