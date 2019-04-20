import * as React from 'react';
import Justify from './Justify';
import { shallow } from '../../enzyme';
import { addLocaleData, IntlProvider } from 'react-intl';
import { flattenMessages } from '../../utils';
import messages from '../../messages';
import * as pt from 'react-intl/locale-data/pt';
addLocaleData([...pt]);
let locale = 'pt-BR';


it('renders without crashing', () => {
  const component = shallow(<IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <Justify />
  </IntlProvider>);
  expect(component.find('.content-wrapper')).toBeDefined();
});