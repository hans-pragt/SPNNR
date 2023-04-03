// #region Imports

/* Vue */
import { createApp } from 'vue';

/* Pinia */
import { createPinia } from 'pinia';

/* SPNNR */
import App from './App.vue';

// #endregion Imports

const app = createApp(App);

app
  .use(createPinia())
  .mount('#app');