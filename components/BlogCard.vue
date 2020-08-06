<template>
  <div class="blog">
    <!-- <nuxt-link
      :to="localePath({ name: 'blog-slug', params: { slug: blog.name } })"
    > -->
    <!-- <nuxt-link :to="'es/' + blog.name"> -->
    <nuxt-link :to="blog.name">
      <!--  <ImageResponsive
        :image-u-r-l="`blog/${blog.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="blog.cardAlt"
      /> -->
      <div class="image-wrap">
        <vlazyimage src="/images/blog/bacon-ipsum/_main.jpg" />
      </div>

      <!--  <vlazyimage
        src="https://cdn-images-1.medium.com/max/1600/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
        src-placeholder="https://cdn-images-1.medium.com/max/30/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
      /> -->

      <article>
        <h2 class="blog__title">
          {{ blog.title }}
        </h2>
        <p class="blog__description">
          {{ blog.description }}
        </p>
      </article>
    </nuxt-link>
  </div>
</template>

<script lang="js">
import Vlazyimage from 'v-lazy-image';

export default {
  components:{
    Vlazyimage,
  },
  props: {
    blog: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_colors.scss';

.image-wrap {
  /*min-height: 100%;
  width: 100%;*/
}

// lazy image inicio
.v-lazy-image {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  min-height: 351px;
  min-width: 575px;
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
// lazy image fin

.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy='loaded'] {
    opacity: 1;
  }
}
.blog {
  margin-bottom: 2em;
  width: 45vw;
  margin: 10px;

  @media (min-width: $screen-sm) {
    padding-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover {
    .blog__title {
      color: $grey-dark;
    }
  }

  &__title {
    font-family: 'Tiempos Headline', Arial, sans-serif;
    color: $primary;
    padding-top: 1rem;
    font-size: 1.1rem;
    transition: color 0.3s;
  }

  &__description {
    margin: 0;
    color: $grey-semi-dark;
  }
}
</style>
