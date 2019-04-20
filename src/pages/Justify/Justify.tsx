import * as React from "react";
import "./Justify.css";
import { Redirect } from "react-router-dom";
import { FormattedMessage, injectIntl } from 'react-intl';
import {Animated} from "react-animated-css";

export interface State {
    backToNPS: boolean,
    completeForm: boolean
}

class Justify extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            backToNPS: false,
            completeForm: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    back() {
        this.setState({ backToNPS: true });
    }

    handleSubmit() {
        this.setState({ completeForm: true });
    }
 
    render() {
        const { backToNPS, completeForm } = this.state;
        const { location } = this.props;
        const rating = location.state.rated;
        const intl = this.props.intl
        const inputValue = intl.formatMessage({
        id: "save"
        });
        const ariaJustify = intl.formatMessage({
            id: "ariaJustify"
        });
        const ariaSubmit = intl.formatMessage({
            id: "ariaSubmit"
        });
        const ariaBack = intl.formatMessage({
            id: "ariaBack"
        });
        if(backToNPS === true) {
            return <Redirect to="/" />
        } else if (completeForm === true) {
            return <Redirect to="/complete" />
        }
        return (
            <Animated animationIn="slideInUp" animationOut="zoomOutUp" isVisible={true}>
                <div className="content-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="justiFyRating"><FormattedMessage id="justifyPt1" /> {rating} <FormattedMessage id="justifyPt2" /></label>
                        <textarea tabIndex={0} role="textbox" aria-label={ariaJustify} aria-required="true" className="u-full-width" placeholder="" id="justiFyRating" required></textarea>
                        <div className="row">
                            <button tabIndex={0} aria-label={ariaBack} role="button" value="Voltar" onClick={() => this.back()}><FormattedMessage id="back" /></button>
                            <input tabIndex={0} aria-label={ariaSubmit} role="button" className="u-pull-right button-primary" type="submit" value={inputValue} />
                        </div>
                    </form>
                </div>
            </Animated>
        );
    }
}

export default injectIntl(Justify);