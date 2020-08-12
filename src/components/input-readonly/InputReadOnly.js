import React, { Component } from "react";
import css from "./input.module.css";

export default class InputReadOnly extends Component {
  render() {
    const { title, value, color } = this.props;

    return (
      <div className={css.flexRow}>
        <span>{title}</span>
        <input
          readOnly
          value={value}
          style={{ color: color, fontWeight: "bold" }}
          type="tel"
        ></input>
      </div>
    );
  }
}
