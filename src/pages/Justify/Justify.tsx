import * as React from "react";
import "./Justify.css";
import { Redirect } from "react-router-dom";
import { FormattedMessage, injectIntl } from 'react-intl';

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
        })
        if(backToNPS === true) {
            return <Redirect to="/" />
        } else if (completeForm === true) {
            return <Redirect to="/complete" />
        }
        return (
            <div className="content-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="exampleMessage"><FormattedMessage id="justifyPt1" /> {rating} <FormattedMessage id="justifyPt2" /></label>
                    <textarea className="u-full-width" placeholder="" id="exampleMessage" required></textarea>
                    <div className="row">
                        <button value="Voltar" onClick={() => this.back()}><FormattedMessage id="back" /></button>
                        <input className="u-pull-right button-primary" type="submit" value={inputValue} />
                    </div>
                </form>
            </div>
        );
    }
}

export default injectIntl(Justify);