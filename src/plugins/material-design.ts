// #region Imports

/* Vuetify */
import { createVuetify, type ThemeDefinition } from 'vuetify';
import 'vuetify/styles' 

/* MDI */
import '@mdi/font/css/materialdesignicons.css';

// #endregion Imports

// #region Colors

const BACKGROUND_COLOR  = '#242423';
const SECONDARY_COLOR   = '#F5CB5C';

// #endregion Colors

const SPNNRTheme : ThemeDefinition = {
  dark: true,
  colors: {
    'background':     BACKGROUND_COLOR,
    'secondary':      SECONDARY_COLOR,
    'on-secondary':   BACKGROUND_COLOR
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