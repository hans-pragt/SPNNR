// #region Imports

/* Vue */
import { createApp } from 'vue';

/* Pinia */
import { createPinia } from 'pinia';

/* SPNNR */
import App from './App.vue';
import MaterialDesign from './plugins/material-design';

// #endregion Imports

createApp(App)
  .use(createPinia())
  .use(MaterialDesign)
  .mount('#app');