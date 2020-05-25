<template>
  <footer>
    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="footer__copyright">
          © {{ year }} —
          <span>Salvador Riobo</span>
        </div>
        <a href="#top" class="footer__top-page">^</a>
      </div>
    </div>
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
$screen-sm: 500px;
$screen-md: 500px;
$text-negative: black;
.footer {
  &__info {
    background-color: #f2f3f3; //$background-secondary;
    padding: 1.5em 0;
    border-top: 1px solid #bdc1c4;
  }

  &__info-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media (min-width: $screen-sm) {
      flex-direction: row;
    }
  }

  &__copyright {
    text-align: center;
    @media (min-width: $screen-sm) {
      text-align: inherit;
    }
  }

  &__top-page {
    color: $text-negative;
    display: block;
    text-align: center;
    line-height: 1;
    -webkit-transition: 1s;
    -moz-transition: 1s;
    transition: 1s;

    @media (min-width: $screen-sm) {
      text-align: right;
    }
  }
}
</style>
