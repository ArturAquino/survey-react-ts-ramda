import * as React from "react";
import * as ReactDOM from "react-dom";
import ThankYou from "./ThankYou";
import { addLocaleData, IntlProvider } from "react-intl";
import { flattenMessages } from "../../utils";
import messages from "../../messages";
import * as pt from "react-intl/locale-data/pt";
addLocaleData([...pt]);
let locale = "pt-BR";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <ThankYou />
  </IntlProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});