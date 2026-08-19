# Salrion Blog (Astro)

Blog personal, apuntes sobre tecnología, linux, programación, tecnologías, forma de vida. Migración desde Nuxt 4 + Nuxt Content 3 a Astro.

El plan y las decisiones de la migración están en [`../docs-migration/`](../docs-migration/).

## Estructura del proyecto

```text
/
├── public/               favicons, _redirects, robots.txt
├── src
│   ├── components/       componentes .astro estáticos + Search.vue (isla interactiva)
│   ├── content/blog/     posts en markdown (Content Collections)
│   ├── content.config.ts esquema zod de la colección blog
│   ├── data/              datos de sitio/SEO
│   ├── layouts/           layout base
│   ├── pages/             rutas
│   ├── styles/            CSS global y por artículo
│   └── utils/             transformImg, formatDate, normalizeYear, seo
└── astro.config.mjs
```

## Comandos

| Comando          | Acción                                       |
| :---------------- | :-------------------------------------------- |
| `bun install`      | Instala dependencias                          |
| `bun run dev`      | Servidor de desarrollo en `localhost:4321`    |
| `bun run build`    | Build de producción a `./dist/`               |
| `bun run preview`  | Preview del build en local                    |
| `bun run astro ...`| Comandos CLI de Astro (`astro check`, etc.)   |

## Stack

Astro 7 + Tailwind CSS v4 (`@tailwindcss/vite`) + Vue (isla interactiva solo para el buscador, vía `@astrojs/vue`) + Content Collections nativas de Astro para el markdown.
