import * as React from 'react';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NPS from "./pages/NPS/NPS";
import Justify from "./pages/Justify/Justify";
import ThankYou from "./pages/ThankYou/ThankYou";
import NotFound from "./pages/NotFound/NotFound";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter basename="/survey">
        <Switch>
          <Route path="/" exact component={NPS} />
          <Route path="/justify" component={Justify} />
          <Route path="/complete" component={ThankYou} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
