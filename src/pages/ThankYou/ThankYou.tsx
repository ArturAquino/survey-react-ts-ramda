import * as React from "react";
import "./ThankYou.css";
import { FormattedMessage, injectIntl } from "react-intl";
import likeImg from '../../assets/img/like.gif';
import {Animated} from "react-animated-css";

class ThankYou extends React.Component<any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    const intl = this.props.intl;
    const thankYouMessage = intl.formatMessage({
      id: "thankYou"
    });
    return (
      <Animated animationIn="zoomInUp" animationOut="fadeIn" isVisible={true}>
        <div className="content-wrapper">
          <img className="thank-you-img" src={likeImg} alt={thankYouMessage}/>
          <p className="thank-you-message"><FormattedMessage id="thankYou" /></p>
        </div>
      </Animated>
    );
  }
}

export default injectIntl(ThankYou);