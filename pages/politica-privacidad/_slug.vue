<template>
  <div>
    <Header />
    <div class="m-8">
      <h1 class="text-gray-600 border-b border-gray-300 my-5 font-bold">
        Politica de privacidad
      </h1>

      <article>
        POLITICA DE COOKIES Las cookies son pequeñas cantidades de información
        que se almacenan en el navegador utilizado por cada usuario para que el
        servidor recuerde cierta información que posteriormente pueda utilizar.
        TIPOS DE COOKIES QUE UTILIZAMOS Esta página web utiliza cookies de
        terceros que son aquellas que se envían a tu ordenador o terminal desde
        un dominio o una página web que no es gestionada por nosotros, sino por
        otra entidad que trata los datos obtenidos a través de las cookies. En
        este caso las Cookies son utilizadas con fines estadísticos relacionados
        con las visitas que recibe y las páginas que se consultan, quedando
        aceptado su uso al navegar por ella. COOKIE (Y PROVEEDOR) DURACIÓN
        DESCRIPCIÓN __cfduid (notin.es) Sesión Publicidad personalization_id
        (twitter.com) Sesión Twitter Facebook Publicidad, estadísticas y
        mediciones Coloca Cookies en el ordenador o dispositivo y recibe la
        información almacenada en ellas cuando utilizas o visitas servicios
        prestados por otras empresas que utilizan los servicios de Facebook. _ga
        (Google) 2 años Se usa para distinguir a los usuarios. _gid (Google) 24
        horas Se usa para distinguir a los usuarios. _gat (Google) 1 minuto Se
        usa para limitar el porcentaje de solicitudes. Si has implementado
        Google Analytics mediante Google Tag Manager, esta cookie se llamará
        _dc_gtm_property-id. _gali (Google) 30s Atribución de enlace mejorada.
        _unam (SHARETHIS) Persistente Su finalidad es cuantificar el número de
        Usuarios que comparten un determinado contenido y cuántas páginas web
        son visitadas a raíz de esa acción. WordPress 2 años Utilizado para el
        correcto funcionamiento del gestor de contenido WordPress. Si desea más
        información más sobre los tipos de cookies de seguimiento y análisis de
        datos de Google haga clic aquí. Para informarse sobre cómo eliminar las
        cookies de su explorador: Firefox Chrome Internet Explorer Safari
      </article>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/sections/Header.vue';
import Footer from '~/components/sections/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es', options);
    },
  },
  head() {
    return {
      title: 'Politica de privacidad',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Politica de privacidad y política de cookies',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~/assets/css/_colors.scss';
h2 {
  margin: 1em 0 1em;
  font-size: 1em;
  color: $grey-semi;
  border-bottom: 1px solid $grey-light;
}
</style>
