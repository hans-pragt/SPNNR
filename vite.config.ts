// #region Imports

/* Node */
import { fileURLToPath, URL } from 'node:url'

/* Vite */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// #endregion Imports

export default defineConfig({
  plugins: [
    vue(),
    vuetify()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
