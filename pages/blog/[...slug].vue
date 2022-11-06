<script setup>
const { path } = useRoute();

console.log(path);

const { data: article } = await useAsyncData('home', () =>
  queryContent()
    .where({
      id: path.replace('/blog/', ''),
      //id: `${route.params.slug}[0]`,
    })
    .findOne()
);

useHead({
  title: article.title + 'My App',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ children: "console.log('Hello world')" }],
});

const imgsmall = 'w_810,q_90,f_auto';
const noimage =
  'https://res.cloudinary.com/salrion/image/upload/{{trans}}/salrionblog/glacier.jpg';

function transformImg(img) {
  const timg = img.replace('{{trans}}', imgsmall);
  return timg;
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('es', options);
}
</script>

<template>
  <SectionsHeader />
  <main>
    <article class="article">
      <div class="article__content">
        <img
          v-if="article.img"
          :src="transformImg(article.img)"
          :alt="article.alt"
          :title="article.title"
          class="article__img"
          loading="lazy"
        />
        <img
          v-else
          :src="transformImg(noimage)"
          alt="no image"
          class="article__img"
          loading="lazy"
        />
        <div class="overlay" />
        <div class="nav__wrapper">
          <nav class="nav">
            <div v-for="tag in article.tags" :key="tag" class="nav__tag">
              {{ tag }}
            </div>
            <br />
          </nav>
        </div>
      </div>
      <div class="article__wrapper">
        <h1>
          {{ article.title }}
        </h1>
        <p class="article__date">
          {{ formatDate(article.year) }}<br />
          <span class="article__date">
            Actualizado: {{ formatDate(article.updatedAt) }}
          </span>
        </p>
        <ContentDoc :path="article._path" />
      </div>
    </article>
  </main>
  <SectionsFooter />
</template>

<style lang="scss">
@import '~/assets/css/_base';

.bg-opacity-95 {
  --bg-opacity: 0.95;
}

text-menu {
  color: $grey;
}

nav {
  ul {
    color: $font-color-nav-menu;
  }
  .tag {
    border: 1px solid $white;
    border-radius: 99999px;
    margin: 5px 5px;
    padding: 2px 10px;
    color: $white;
    width: 50%;
  }
}

article {
  color: $font-color;
  background-color: $grey-light;
  width: 100vw;

  display: flex;
  @include sm {
    flex-direction: column;
  }
  @include lg {
    height: 100vh;
    flex-direction: row;
    overflow: hidden;
  }

  h1 {
    font-weight: bold;
    margin: 0 0 10px 0;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    margin: 20px 0 10px 0;
  }
  h1 {
    font-size: 1.3em;
  }
  h2 {
    font-size: 1.2em;
  }
  h3 {
    font-size: 1.1em;
  }
  p {
    margin-bottom: 20px;
  }

  .article__content {
    display: flex;
    justify-content: center;
    position: relative; //relative
    @include sm {
      width: 100%; //xs:w-full
      height: 20rem; //  xs:h-84
    }

    @include lg {
      width: 25%; // lg:w-1/4
      height: 100%; // lg:h-full
    }

    .article__img {
      //absolute h-full w-full object-cover
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .nav__wrapper {
      porsition: absolute; // absolute
      // text-menu
      top: 8rem; // top-30
      left: 8rem; // left-30
      --tw-bg-opacity: 1;
      background-color: rgba(
        156,
        163,
        175,
        var(--tw-bg-opacity)
      ); //  bg-gray-400 bg-opacity-95

      @include sm {
        width: 100%; //  xs:w-full
      }
      @include lg {
        width: 83.333333%; // lg:w-5/6
      }

      margin: 0.5rem; // m-2
      border-radius: 0.5rem; //   rounded-lg

      .nav {
        margin-top: 1.25rem; //  mt-5
        @include lg {
          position: relative; //  lg:relative

          top: 24rem; //  lg:top-100
          left: 2.5rem; // lg:left-10
        }
        @include sm {
          position: absolute; //  xs:absolute
          top: 0; //  xs:top-0
          left: 0; //  xs:left-0
        }

        .nav__tag {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
      }
    }
  }
  .article__wrapper {
    position: relative; //relative
    overflow-y: scroll; // overflow-y-scroll
    @include lg {
      width: 75%; // lg:w-3/4
      height: 100%; // lg:h-full
    }
    @include sm {
      width: 100%; // xs:w-full
      height: 100%; // xs:h-full
    }
    padding: 1.25rem; //  p-5
    .article__date {
      margin-top: 0;
      margin-bottom: 0.75rem;
      font-size: 0.75rem;
    }
  }
}

table {
  width: 100%;
  td,
  th {
    border: 1px solid grey;
    padding: 5px;
  }
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background-color: $cream;
}
</style>
