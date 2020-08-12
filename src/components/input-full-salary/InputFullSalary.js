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
          placeholder="Insira seu salário aqui"
          type="number"
          value={value}
          min={1045}
          max={999999}
          step={10}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}
