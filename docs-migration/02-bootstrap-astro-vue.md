# 02 - Bootstrap Astro + Vue

## Objetivo
Levantar base Astro con soporte Vue y estructura equivalente al sitio actual.

## Decisiones
- Astro como framework principal de páginas.
- Vue para componentes interactivos (islands con `client:*`).
- Mantener Tailwind y solo conservar SCSS donde sea necesario.

## Tareas
- [ ] Crear proyecto Astro en rama de migración.
- [ ] Añadir integración Vue (`@astrojs/vue`).
- [ ] Añadir Tailwind en Astro.
- [ ] Definir layout base (`src/layouts/BaseLayout.astro`).
- [ ] Migrar datos SEO globales desde `data/index.ts`.

## Estructura sugerida
- `src/pages/`
- `src/components/` (incluye Vue)
- `src/content/blog/`
- `src/layouts/`
- `src/data/`

## Validación mínima
- [ ] `dev`, `build` y `preview` funcionando.
- [ ] Home de prueba renderiza sin JS obligatorio.

