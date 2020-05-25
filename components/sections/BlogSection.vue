<template>
  <section>
    <div class="blogs__top">
      <div>
        <!-- Necesario I18n <h2>{{ $t('posts') }}</h2> -->
        <h2>posts</h2>
        <span class="emoji-title emoji--writing" />
      </div>
      <!-- <LangSwitcher /> -->
    </div>
    <div class="blogs">
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
<style lang="scss">
$screen-sm: 500px;
$screen-md: 500px;
$text-negative: black;
.blogs {
  margin: 0;

  @media (min-width: $screen-sm) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    display: grid;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4rem;
  }
}
</style>
