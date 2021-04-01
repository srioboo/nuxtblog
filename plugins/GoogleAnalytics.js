import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted');

  Vue.use(
    VueGtag,
    {
      config: { id: process.env.GOOGLE_ANALYTICS_UA || '' },
      bootstrap: getGDPR === 'true',
      appName: 'APP_NAME',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true,
    },
    // eslint-disable-next-line prettier/prettier
    app.router,
  );
};
