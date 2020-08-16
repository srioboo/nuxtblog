<template>
  <header class="header">
    <div class="xs:flex lg:hidden  burger" @click="togleMenu()">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>

    <div class="logo">
      <a href="/">Salrion</a>
    </div>

    <div id="navmenu">
      <ul class="flex">
        <li class="mr-6">
          <a href="/year-archive/">Posts</a>
        </li>
        <li class="mr-6">
          <a href="/tags/">Tags</a>
        </li>
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
@import '~/assets/css/_colors.scss';

.header {
  @apply flex;
  @apply items-center;
  @apply justify-between;
  @apply flex-wrap;
  @apply p-3;
  @apply text-gray-500;
  @apply border-gray-500;
  @apply border-b;
  height: $he-header;

  .burger {
    //@apply flex;
    @apply flex-wrap;
    @apply justify-around;
    @apply self-center;
    @apply items-center;
    @apply w-10;
    @apply h-8;

    .burger-line {
      @apply bg-gray-500;
      @apply h-1;
      @apply w-8;
    }
  }
}
</style>
