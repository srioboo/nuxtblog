# 02 - Plan de ejecucion (Fases 3 y 4)

## Checklist
- [ ] Ejecutar Fase 3: Funcionalidad.
- [ ] Ejecutar Fase 4: Calidad y release.
- [ ] Validar criterios de salida por fase.

## Fase 3 - Funcionalidad

### 1) Migrar tags y archivo anual (si activos)
- Confirmar si las rutas `tags` y `year-archive` siguen siendo parte del alcance publico.
- Si estan activas, implementar paginas en Astro con contenido real filtrado por tag y por ano.
- Mantener orden por fecha descendente en listados y consistencia de slugs.
- Si no estan activas, definir redirecciones o retirada controlada para evitar 404 inesperados.
- Validar navegacion cruzada desde home y posts hacia tags/archivo (si aplica).

### 2) Migrar busqueda solo si sigue en uso real
- Confirmar uso real de busqueda (producto/uso interno) antes de migrarla.
- Si se mantiene, migrar `Search` como componente Vue en isla (`client:load` o `client:visible`).
- Adaptar fuente de datos a Astro Content Collections en lugar de consultas Nuxt.
- Verificar que no rompa SSR/SSG ni agregue JS innecesario en paginas sin busqueda.
- Si se descarta, retirar referencias en header/layout y documentar decision.

### 3) Revisar links internos, imagenes y og:image
- Recorrer contenido y detectar enlaces internos rotos tras el cambio de rutas.
- Verificar resolucion de imagenes de portada y rutas de `og:image` por post.
- Unificar construccion de URLs absolutas con `SITE_URL` para `canonical` y Open Graph.
- Corregir frontmatter faltante o inconsistente para evitar metadata incompleta.
- Ejecutar una comprobacion final de enlaces entre home, detalle, tags y archivo (si activos).

### Criterio de salida Fase 3
- Rutas funcionales de tags/archivo segun decision tomada (migradas o retiradas con control).
- Busqueda en estado definido (migrada y funcional, o retirada sin referencias rotas).
- Enlaces internos sin roturas criticas.
- `og:image` y metadatos clave correctos en rutas principales.

## Fase 4 - Calidad y release

### 1) Comprobar `dev/build/preview` sin errores
- Ejecutar flujo local completo (`dev`, `build`, `preview`) en Astro.
- Corregir errores de compilacion y advertencias que afecten salida final.
- Verificar que rutas dinamicas de blog generan contenido esperado.
- Revisar tamano de salida y comportamiento base de rendimiento en home/post.

### 2) Revisar sitemap y robots en entorno final
- Configurar sitemap con rutas reales y exclusiones acordadas.
- Validar `robots` para no bloquear rutas que deben indexar.
- Comprobar que `canonical` y URLs del sitemap usan dominio final.
- Probar artefactos generados en preview o entorno staging.

### 3) Hacer smoke test SEO (title/meta/canonical/OG)
- Revisar en home y post: `title`, `description`, `canonical`, `og:url`, `og:image`.
- Confirmar herencia de metadatos globales y override por pagina/post.
- Validar idioma (`es`) y consistencia de metadatos sociales.
- Corregir casos sin descripcion o imagen de Open Graph.

### 4) Plan de rollback (mantener Nuxt deployable hasta corte)
- Mantener rama/artefacto Nuxt desplegable durante la transicion.
- Definir criterio de corte y ventana de switch a Astro.
- Documentar pasos de reversa rapida si aparece regresion critica.
- Verificar que el equipo conoce el procedimiento de rollback.

### Criterio de salida Fase 4
- `build` y `preview` estables sin errores bloqueantes.
- Sitemap/robots/canonical verificados en entorno objetivo.
- Smoke SEO completado en rutas clave sin fallos criticos.
- Plan de rollback probado o, como minimo, documentado y operativo.

