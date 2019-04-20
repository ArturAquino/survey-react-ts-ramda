import * as React from "react";
import "./Justify.css";
import { Redirect } from "react-router-dom";

export interface State {
    backToNPS: boolean,
    completeForm: boolean
}

export default class Justify extends React.Component<any, State> {
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
        if(backToNPS === true) {
            return <Redirect to="/" />
        } else if (completeForm === true) {
            return <Redirect to="/complete" />
        }
        return (
            <div className="content-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="exampleMessage">Oh, que pena! Fale um pouquinho pra gente o que motivou sua nota 10 sobre a indicação?</label>
                    <textarea className="u-full-width" placeholder="" id="exampleMessage" required></textarea>
                    <div className="row">
                        <button value="Voltar" onClick={() => this.back()}>Voltar</button>
                        <input className="u-pull-right button-primary" type="submit" value="Enviar"></input>
                    </div>
                </form>
            </div>
        );
    }
}