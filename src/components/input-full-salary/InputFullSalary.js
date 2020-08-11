import React, { Component } from "react";
import css from "./inputsalary.module.css";

export default class InputFullSalary extends Component {
  handleInput = (event) => {
    const newValue = event.target.value;
    this.props.onChangeInput(newValue);
  };

  render() {
    const { title, value } = this.props;

    return (
      <div className={css.flexRow}>
        <span>{title}</span>
        <input
          type="number"
          value={value}
          min={0}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}
