import React from "react";

export default class Cell extends React.Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value,
    };
  }
  render() {
    return <div className="cell"></div>;
  }
}
