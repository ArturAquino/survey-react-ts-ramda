import * as React from "react";
import { Animated } from "react-animated-css";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import "./NotFound.css";
import imgNotFound from "../../assets/img/404.gif";

class NotFound extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const intl = this.props.intl;
    const pageNotFound = intl.formatMessage({
      id: "pageNotFound"
    });
    return (
      <Animated animationIn="fadeInUp" animationOut="zoomOutUp" isVisible={true}>
        <img className="not-found-img" src={imgNotFound} alt={pageNotFound}/>
        <p className="not-found-message"><FormattedMessage id="pageNotFound" /></p>
        <p className="not-found-home">
          <FormattedMessage id="feelLonely" /> 
          <Link tabIndex={0} to="/"><FormattedMessage id="homepage" /></Link>!
        </p>
      </Animated>
    );
  }
}

export default injectIntl(NotFound);