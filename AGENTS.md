# AGENTS.md

## Panorama rápido
- Este repo es un blog personal en **Nuxt 4 + Nuxt Content 3**.
- `app.vue` es el shell global: aplica el layout, el indicador de carga y el `useHead()` base.
- `nuxt.config.ts` centraliza módulos (`@nuxt/content`, `@nuxtjs/seo`, `@nuxtjs/sitemap`, `@nuxtjs/robots`, `@vueuse/nuxt`, Tailwind) y toma `SITE_URL` desde `NUXT_PUBLIC_SITE_URL`.
- `data/index.ts` concentra SEO, `meta` globales e iconos; evita duplicar estas listas en páginas nuevas.

## Flujo de contenido
- Los posts viven en `content/blog/*.md` y usan frontmatter real como `id`, `title`, `img`, `alt`, `date`, `year`, `description`, `tags`, `author`, `layout`, `published`, `ogImage`.
- La colección se define en `content.config.ts` como `content`, con esquema `zod` para `tags`, `image`, `date`, `alt`, `ogImage` y `published`.
- Si añades o cambias campos del frontmatter, actualiza también ese esquema y los consumidores en `pages/index.vue` y `pages/blog/[...slug].vue`.

## Páginas y datos
- `pages/index.vue` lista el contenido con `queryCollection('content').order('date', 'DESC').all()` y renderiza `<SectionsBlogCard />`.
- `pages/blog/[...slug].vue` carga una entrada con `queryCollection('content').path(route.path).first()` y la pinta con `<ContentRenderer />`.
- `pages/tags/_slug.vue` y `pages/year-archive/[...slug].vue` son rutas heredadas/heterogéneas; revísalas con cuidado antes de usarlas como referencia porque mezclan patrones antiguos y nuevos.

## Convenciones de implementación
- Reutiliza `composables/formatDate.ts` y `composables/transformImg.ts` en lugar de reescribir helpers de fecha o Cloudinary.
- Para metadatos de página usa `useHead()`; el blog ya define `og:url`, `og:image`, `description` y `lang: 'es'`.
- Los componentes se autoimportan por carpeta: `<SectionsHeader />`, `<SectionsFooter />`, `<SectionsBlogCard />`.
- `components/content/ProseCode.vue` personaliza bloques de código; si tocas Markdown/renderizado, valida que siga funcionando con `ContentRenderer`.
- El estilo mezcla Tailwind utility classes con SCSS local; no conviertas todo el proyecto a un solo enfoque sin necesidad.

## Puntos delicados
- `components/sections/Search.vue` todavía usa `$content` estilo Nuxt 2; no asumas que es el patrón preferido del repo.
- `components/sections/Footer.vue` usa Options API, mientras la mayoría de nuevos componentes usan `<script setup>`.
- `sitemap.exclude` omite `/politica-privacidad/**` y `tags/*`; conserva esas exclusiones si tocas rutas públicas.
- `runtimeConfig.public.SITE_URL` y `GOOGLE_SITE_VERIFICATION` dependen de variables de entorno; no hardcodees valores de producción.

## Flujo de trabajo local
- Bun es el gestor preferido: usa `bun install` y `bun run dev|build|generate|preview|lint|lintfix` para trabajar día a día.
- También existen `bun run commitlint` y `bun run release` para el flujo de commits/releases.
- Si necesitas una referencia mínima en npm, los scripts equivalentes están en `package.json` (`npm run dev`, `npm run build`, etc.).

## Antes de editar
- Lee `nuxt.config.ts`, `content.config.ts`, `data/index.ts`, `pages/index.vue` y `pages/blog/[...slug].vue` cuando el cambio afecte contenido, SEO o rutas.
- Revisa un post real de `content/blog/*.md` para mantener el frontmatter consistente con el resto del sitio.

