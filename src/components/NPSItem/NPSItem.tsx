import * as React from "react";
import "./NPSItem.css";

export interface Props {
    tabIndex?: number;
    label: number;
    color: string;
    onSelect: any
};

export default class NPSItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { label, color, onSelect, tabIndex } = this.props; 
    const styles = {
      backgroundColor: color
    };
    return (
      <div tabIndex={tabIndex} className="nps-item" style={styles} onClick={onSelect} onKeyPress={onSelect}>
        {label}
      </div>
    );
  }
}
