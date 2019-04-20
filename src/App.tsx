import * as React from 'react';
import './App.css';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page1 from "./pages/Page1/Page1";
import Justify from "./pages/Justify/Justify";
import ThankYou from "./pages/ThankYou/ThankYou";
import NotFound from "./pages/NotFound/NotFound";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter basename="/survey">
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/justify" component={Justify} />
          <Route path="/complete" component={ThankYou} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
