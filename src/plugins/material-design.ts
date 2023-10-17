// #region Imports

/* Vuetify */
import { createVuetify, type ThemeDefinition } from 'vuetify';
import './material-design/fonts.scss';
import './material-design/overrides.scss'; 

/* MDI */
import '@mdi/font/css/materialdesignicons.css';

// #endregion Imports

const SPNNRTheme : ThemeDefinition = {
  dark: false
}

const materialDesign = createVuetify({
  theme: {
    defaultTheme: 'SPNNRTheme',
    themes: {
      SPNNRTheme: SPNNRTheme      
    }
  }
});

export default materialDesign;