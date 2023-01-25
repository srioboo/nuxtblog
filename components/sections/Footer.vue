<template>
  <footer>
    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="footer__copyright">
          © {{ year }}
          <span>
            Salvador. Powered by <a href="https://www.nuxtjs.org">Nuxt</a>
          </span>
        </div>
        <a href="#top" class="footer__top-page">^</a>
      </div>
    </div>
    <!-- CookieAlert  -->
  </footer>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/css/_base.scss';

.footer {
  &__info {
    background-color: $grey-light; //$background-secondary;
    padding: 1.5em 1em;
    border-top: 1px solid $grey-medium;
    height: $he-footer;
  }

  &__info-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @include sm {
      flex-direction: row;
    }
  }

  &__copyright {
    text-align: center;
    color: $grey;
    @include sm {
      text-align: inherit;
    }
    color: $grey-dark;
  }

  &__top-page {
    color: $grey;
    display: block;
    text-align: center;
    line-height: 1;
    -webkit-transition: 1s;
    -moz-transition: 1s;
    transition: 1s;

    @include sm {
      text-align: right;
    }
  }
}
</style>
