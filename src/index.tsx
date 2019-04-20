import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as pt from 'react-intl/locale-data/pt';
import { flattenMessages } from './utils';
import messages from './messages';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...en, ...pt])
let locale = navigator.language || navigator['userLanguage'];

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])} defaultLocale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
