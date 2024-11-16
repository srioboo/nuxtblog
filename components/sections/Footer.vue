<template>
  <footer>
    <div
      class="bg-gray-200 py-6 px-4 h-14 border-t border-solid border-t-gray-400"
    >
      <div class="flex justify-between w-full flex-col sm:flex-row">
        <div class="text-gray-500 text-center">
          © {{ year }}
          <span>
            Salvador. Powered by <a href="https://www.nuxtjs.org">Nuxt</a>
          </span>
        </div>
        <a href="#top" class="block text-center">^</a>
      </div>
    </div>
    <!-- CookieAlert  -->
  </footer>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
