<template>
  <header class="header">
    <!-- <div class="xs:flex lg:hidden  header__burger" @click="togleMenu()">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div> -->

    <div class="header__logo">
      <a href="/">Salrion</a>
    </div>

    <div id="navmenu" class="header__navmenu">
      <ul>
        <li>
          <a href="/year-archive">Posts</a>
        </li>
        <!-- <li>
          <a href="/tags">Tags</a>
        </li> -->
      </ul>
    </div>
  </header>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    // msg: String,
  },
  data() {
    return {
      text: 'Text',
    };
  },
  methods: {
    togleMenu() {
      const nav = document.getElementById('navmenu');
      if (nav.getAttribute('class')) {
        nav.removeAttribute('class');
      } else {
        nav.setAttribute('class', 'hide');
      }
    },
  },
});
</script>

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

  /*@apply flex;
  @apply items-center;
  @apply justify-between;
  @apply flex-wrap;
  @apply p-3;
  @apply text-gray-500;*/

  /*@apply border-gray-500;
  @apply border-b;*/

  height: $he-header;

  .header__burger {
    //@apply flex;
    flex-wrap: wrap;
    justify-content: justify-around;
    width: 10px;
    height: 8px;
    align-items: center;
    align-self: center;
    /*
    @apply justify-around;
    @apply self-center;
    @apply items-center;
    @apply w-10;
    @apply h-8;*/

    .burger-line {
      background-color: $grey-semi;
      height: 1px;
      width: 1px;
      /*@apply bg-gray-500;
      @apply h-1;
      @apply w-8;*/
    }
  }

  .header__logo {
    font-weight: bold;
    //@apply font-bold;
    color: $grey-semi;
    //@apply text-gray-800;
    a {
      text-decoration: none;
    }
  }

  .header__navmenu {
    font-weight: bold;
    color: $grey-dark;
    /*@apply font-bold;
    @apply text-gray-700;*/

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
