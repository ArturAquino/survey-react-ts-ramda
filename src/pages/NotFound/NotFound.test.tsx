import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFound from './NotFound';
import { addLocaleData, IntlProvider } from 'react-intl';
import { flattenMessages } from '../../utils';
import messages from '../../messages';
import * as pt from 'react-intl/locale-data/pt';
addLocaleData([...pt]);
let locale = 'pt-BR';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = createMemoryHistory();
  ReactDOM.render(<Router history={history}>
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <NotFound />
    </IntlProvider>
  </Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});