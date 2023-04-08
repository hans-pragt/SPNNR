// #region Imports

/* Vuetify */
import { createVuetify, type ThemeDefinition } from 'vuetify';
import 'vuetify/styles' 

/* MDI */
import '@mdi/font/css/materialdesignicons.css';

// #endregion Imports

// #region Colors

// #endregion Colors

const SPNNRTheme : ThemeDefinition = {
  dark: false,
  colors: {
  }
}

const materialDesign = createVuetify({
  theme: {
    defaultTheme: 'DecalocatorTheme',
    themes: {
      DecalocatorTheme: SPNNRTheme
    }
  }
});
  
export default materialDesign;