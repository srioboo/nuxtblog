<template>
  <div
    v-if="isOpen"
    class="fixed bottom-0 left-0 lg:flex items-center p-4 bg-gray-100 shadow-sm justify-center w-full"
  >
    <div class="text-5xl pb-2 leading-none">🍪</div>
    <div class="lg:mx-8">
      <p>
        Este sitio utiliza cookies propias y de terceros. Si continúa navegando
        consideramos que acepta el uso de estas.
        <nuxt-link class="text-link" to="/politica-privacidad">
          Ver política
        </nuxt-link>
        para más información.
      </p>
    </div>
    <div class="flex justify-center mt-4 lg:mt-0">
      <button class="button ml-2 md:ml-0" @click="accept">Aceptar</button>
      <button class="button md:ml-2" @click="deny">&times;</button>
    </div>
  </div>
</template>

<script setup>
import Vue from 'vue';
import { bootstrap } from 'vue-gtag';

export default Vue.extend({
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    accept() {
      console.log('SRN - accept');
      if (process.browser) {
        bootstrap().then(() => {
          this.isOpen = false;
          localStorage.setItem('GDPR:accepted', true);
          location.reload();
        });
      }
    },
    deny() {
      console.log('SRN - deny');
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', false);
      }
    },
    getGDPR() {
      console.log('SRN - getGDPR', process.browser);
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true);
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
