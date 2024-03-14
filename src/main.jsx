import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@fontsource-variable/cairo';
import '@fontsource/poppins';
import '@fontsource/tajawal';
import global_en from './translations/en/global.json';
import global_ar from './translations/ar/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: { global: global_en },
    ar: { global: global_ar },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </I18nextProvider>
  </BrowserRouter>
);