import * as React from "react";
import "./NPSComponent.css";
import NPSItem from '../NPSItem/NPSItem';
import { map } from 'ramda';

export interface NPSItemType {
    label: number,
    color: string
}

export interface Props {
    callback: Function
}

export interface NPSComponentState {
    npsItems: NPSItemType[]
}

export default class NPSComponent extends React.Component<Props> {

    private npsArray = [
        { label: 0, color: "#B72025" },
        { label: 1, color: "#D62027" },
        { label: 2, color: "#F05223" },
        { label: 3, color: "#F36F21" },
        { label: 4, color: "#FAA823" },
        { label: 5, color: "#FFCA27" },
        { label: 6, color: "#ECDB12" },
        { label: 7, color: "#E8E73D" },
        { label: 8, color: "#C5D92D" },
        { label: 9, color: "#AFD136" },
        { label: 10, color: "#64B64D" }
    ];

    constructor(props: Props) {
        super(props);
        this.submitNPS = this.submitNPS.bind(this);
    }

    submitNPS(value: number) {
        const { callback } = this.props;
        callback(value);
    }

    private renderNPSItem = (item: NPSItemType) => <li key={item.label}><NPSItem tabIndex={0} aria-label={item.label} label={item.label} color={item.color} onSelect={() => this.submitNPS(item.label)} /></li>

    render() {
        return (
            <ul className="nps-list">
                { map(this.renderNPSItem, this.npsArray) }
            </ul>
        );
    }
}