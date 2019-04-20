import * as React from "react";
import "./NPSComponent.css";
import NPSItem from '../NPSItem/NPSItem';
// import { compose, map, prop } from 'ramda';

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
  constructor(props: Props) {
    super(props);
    this.submitNPS = this.submitNPS.bind(this);
  }

  submitNPS(value: number) {
    const { callback } = this.props;
    callback(value);
  }
    
  render(): JSX.Element {
    // const List = (items: JSX.Element[]) => <ul className="nps-list">{items}</ul>
    // const Item = (item: NPSItemType) => <li key={item.label}><NPSItem label={item.label} color={item.color} onSelect={() => this.submitNPS(item.label)} /></li>
    // const getItems = prop('npsItems');
    // const NPSComponent = compose<{}
    // , JSX.Element[], JSX.Element>(List, map(Item), getItems);
    // const props: NPSComponentState = {npsItems: [{label: 1, color: 'red'}, {label: 2, color: 'blue'}]}
    return (
        <ul className="nps-list">
            <li>
                <NPSItem label={0} color="#B72025" onSelect={() => this.submitNPS(0)} />
            </li>
            <li>
                <NPSItem label={1} color="#D62027" onSelect={() => this.submitNPS(1)} />
            </li>
            <li>
                <NPSItem label={2} color="#F05223" onSelect={() => this.submitNPS(2)} />
            </li>
            <li>
                <NPSItem label={3} color="#F36F21" onSelect={() => this.submitNPS(3)} />
            </li>
            <li>
                <NPSItem label={4} color="#FAA823" onSelect={() => this.submitNPS(4)} />
            </li>
            <li>
                <NPSItem label={5} color="#FFCA27" onSelect={() => this.submitNPS(5)} />
            </li>
            <li>
                <NPSItem label={6} color="#ECDB12" onSelect={() => this.submitNPS(6)} />
            </li>
            <li>
                <NPSItem label={7} color="#E8E73D" onSelect={() => this.submitNPS(7)} />
            </li>
            <li>
                <NPSItem label={8} color="#C5D92D" onSelect={() => this.submitNPS(8)} />
            </li>
            <li>
                <NPSItem label={9} color="#AFD136" onSelect={() => this.submitNPS(9)} />
            </li>
            <li>
                <NPSItem label={10} color="#64B64D" onSelect={() => this.submitNPS(10)} />
            </li>
        </ul>
    );
  }
}