import * as React from "react";
import "./NPSItem.css";

export interface Props {
    label: number;
    color: string;
    onSelect: any
};

export default class NPSItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { label, color, onSelect } = this.props; 
    const styles = {
      backgroundColor: color
    };
    return (
      <div className="nps-item" style={styles} onClick={onSelect}>
        {label}
      </div>
    );
  }
}
