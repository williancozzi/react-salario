import React, { Component } from "react";

export default class InputReadOnly extends Component {
  render() {
    const { title, color } = this.props;

    return <div style={{ color: color, fontWeight: 700 }}>{title}</div>;
  }
}
