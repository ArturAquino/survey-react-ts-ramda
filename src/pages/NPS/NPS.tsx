import * as React from "react";
import { Redirect } from "react-router-dom";
import NPSComponent from "../../components/NPSComponent/NPSComponent";
import "./NPS.css";
import { FormattedMessage } from "react-intl";

export interface State {
  redirectToReferrer: string,
  rating: number
}

export default class NPS extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      redirectToReferrer: "",
      rating: 10
    };
    this.handleNPSSelect = this.handleNPSSelect.bind(this);
  }

  handleNPSSelect(value: number) {
    this.setState({ rating: value });
    if(value <= 7) {
      this.setState({ redirectToReferrer: "justify"});
    } else {
      this.setState({ redirectToReferrer: "complete" });
    }
  }
 
  render() {
    const { redirectToReferrer, rating } = this.state;
    const name = "Paula";
    const company = "CompanyX";
    if (redirectToReferrer === "complete") {
      return <Redirect to="/complete" />
    } else if (redirectToReferrer === "justify") {
      return <Redirect to={{
        pathname: "/justify",
        state: { rated: rating }
    }} />
    } else {
      return (
        <div className="content-wrapper">
          <p className="nps-title"><FormattedMessage id="hello" /> {name}, <FormattedMessage id="howAreYou" /></p>
          <p className="nps-question"><FormattedMessage id="npsQuestion1" /> {company} <FormattedMessage id="npsQuestion2" /></p>
          <NPSComponent callback={(value: number) => this.handleNPSSelect(value)}/>
        </div>
      )
    }
  }
}