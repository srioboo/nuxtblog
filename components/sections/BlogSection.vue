<template>
  <section>
    <div class="blogs__top">
      <!-- Necesario I18n <h2>{{ $t('posts') }}</h2> -->
      <h1>Entradas recientes</h1>

      <!-- <LangSwitcher /> -->
    </div>
    <div class="blogs">
      console.log(' sasdfa fasdf'); console.log({{ blogs }});
      <blog-card v-for="blog in blogs" :key="blog.name" :blog="blog" />
    </div>
  </section>
</template>
<script>
import BlogCard from '~/components/BlogCard.vue';
// import LangSwitcher from '~/components/LangSwitcher';

export default {
  components: {
    BlogCard, // LangSwitcher
  },
  props: {
    blogs: {
      type: Array,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
@import '~/assets/css/_colors.scss';

section {
  margin: 0 20px;
  min-height: calc(100vh - #{$he-footer} - #{$he-header});

  .blogs {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      //margin-top: 1rem;
      //width: 85%;

      h1 {
        font-size: 1.2em;
        margin: 1.414em 0 0;
        color: $grey;
        padding-bottom: 0.5em;
        border-bottom: 1px solid $grey-light;
        width: 100%;
      }
    }
  }
}
</style>
