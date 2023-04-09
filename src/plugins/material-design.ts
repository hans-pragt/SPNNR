// #region Imports

/* Vuetify */
import { createVuetify, type ThemeDefinition } from 'vuetify';
import './material-design/fonts.scss';
import './material-design/overrides.scss'; 

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