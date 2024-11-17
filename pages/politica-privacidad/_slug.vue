<template>
  <div>
    <Header />
    <div class="m-8">
      <h1 class="text-gray-600 border-b border-gray-300 my-5 font-bold">
        Politica de privacidad
      </h1>

      <h1>POLITICA DE COOKIES</h1>
      <p>
        Las cookies son pequeñas cantidades de información que se almacenan en
        el navegador utilizado por cada usuario para que el servidor recuerde
        cierta información que posteriormente pueda utilizar.
      </p>

      <h2>TIPOS DE COOKIES QUE UTILIZAMOS</h2>
      <p>
        Esta página web utiliza cookies de terceros que son aquellas que se
        envían a tu ordenador o terminal desde un dominio o una página web que
        no es gestionada por nosotros, sino por otra entidad que trata los datos
        obtenidos a través de las cookies. En este caso las Cookies son
        utilizadas con fines estadísticos relacionados con las visitas que
        recibe y las páginas que se consultan, quedando aceptado su uso al
        navegar por ella.
      </p>
      <br />
      <div class="flex flex-row justify-between">
        <div class="flex flex-col justify-between">
          <div>COOKIE (Y PROVEEDOR)</div>
          <div>_ga (Google)</div>
          <div>_gid (Google)</div>
          <div>_gat (Google)</div>
        </div>
        <div class="flex flex-col justify-between">
          <div>DURACIÓN</div>
          <div>24 horas</div>
          <div>1 minuto</div>
          <div>Publicidad</div>
        </div>
        <div class="flex flex-col justify-between">
          <div>DESCRIPCIÓN</div>
          <div>2 años Se usa para distinguir a los usuarios.</div>
          <div>Se usa para distinguir a los usuarios.</div>
          <div>Se usa para limitar el porcentaje de solicitudes</div>
        </div>
      </div>
    </div>
    <Footer />
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
h2 {
  margin: 1em 0 1em;
  font-size: 1em;
  // color: $grey-semi;
  // border-bottom: 1px solid $grey-light;
}
</style>
