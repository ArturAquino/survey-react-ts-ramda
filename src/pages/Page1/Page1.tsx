import * as React from "react";
import { Redirect } from "react-router-dom";
import NPSComponent from "../../components/NPSComponent/NPSComponent";
import "./Page1.css";

export interface State {
  redirectToReferrer: string
}

export default class Page1 extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      redirectToReferrer: ""
    };
    this.handleNPSSelect = this.handleNPSSelect.bind(this);
  }

  handleNPSSelect(value: number) {
    if(value <= 7) {
      this.setState({ redirectToReferrer: "justify"})
    } else {
      this.setState({ redirectToReferrer: "complete" });
    }
  }
 
  render(): JSX.Element {
    const { redirectToReferrer } = this.state;
    const name = "Paula";
    if (redirectToReferrer === "complete") {
      return <Redirect to="/complete" />
    } else if (redirectToReferrer === "justify") {
      return <Redirect to="/justify" />
    } else {
      return (
        <div className="content-wrapper">
          <p className="nps-title">Olá {name}, tudo bem?</p>
          <p className="nps-question">Em uma escala de 0 a 10, o quanto você indicaria a CompanyX a um(a) amigo(a) ou familiar?</p>
          <NPSComponent callback={(value: number) => this.handleNPSSelect(value)}/>
        </div>
      )
    }
  }
}