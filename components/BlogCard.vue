<template>
  <div class="blog">
    <!-- <nuxt-link
      :to="localePath({ name: 'blog-slug', params: { slug: blog.name } })"
    > -->
    <!-- <ImageResponsive
      :image-u-r-l="`blog/${blog.id}/_thumbnail.jpg`"
      :classes="'cardThumbnail'"
      :width="'952'"
      :height="'509'"
      :alt="blog.cardAlt"
    />-->
    <h3 class="blog__title">
      {{ blog.title }}
    </h3>
    <p class="blog__description">
      {{ blog.description }}
    </p>
    <!-- </nuxt-link> -->
  </div>
</template>

<script lang="js">
export default {
  props: {
    blog: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style lang="scss">
$screen-sm: 500px;
$screen-md: 500px;
$text-negative: black;
$primary: teal;
$secondary: red;
$grey-2: grey;
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy='loaded'] {
    opacity: 1;
  }
}
.blog {
  @media (min-width: $screen-sm) {
    padding-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover {
    .blog__title {
      color: $primary;
    }
  }

  &__title {
    font-family: 'Tiempos Headline', Arial, sans-serif;
    color: $secondary;
    padding-top: 1rem;
    font-size: 2.5rem;
    transition: color 0.3s;
  }

  &__description {
    margin: 0;
    color: $grey-2;
  }
}
</style>
