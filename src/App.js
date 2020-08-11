import React, { Component } from "react";
import ColorBar from "./components/color-bar/ColorBar";
import InputFullSalary from "./components/input-full-salary/InputFullSalary";
import InputReadOnly from "./components/input-readonly/InputReadOnly";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      bar1: 33,
      bar2: 33,
      bar3: 33,
    };
  }

  handleChangeInput = (newValue) => {
    console.log(newValue);
    this.setState({
      value: newValue,
    });
  };

  // handleChangeBar1 = (event) => {
  //   const bar1 = +event.target.value;
  //   const bar2 = +event.target.value - bar1;
  //   const bar3 = +event.target.value - bar1;

  //   this.setState({ bar1, bar2, bar3 });
  // };

  render() {
    const { value, bar1, bar2, bar3 } = this.state;

    return (
      <div>
        <h1 style={styles.centeredTitle}>React Salário</h1>
        <div style={styles.salary}>
          <InputFullSalary
            onChangeInput={this.handleChangeInput}
            title={"Salário Bruto:"}
          />
        </div>
        <div>
          <InputReadOnly value={value} title={"Base INSS:"} />
          <InputReadOnly value={value} title={"Desconto INSS:"} />
          <InputReadOnly value={value} title={"Base IRPF:"} />
          <InputReadOnly value={value} title={"Desconto IRPF:"} />
        </div>
        <div>
          <InputReadOnly value={value} title={"Salário Líquido:"} />
        </div>

        <div style={styles.bars}>
          <ColorBar value={bar1} color={"#e67e22"} />
          <ColorBar value={bar2} color={"#c0392b"} />
          <ColorBar value={bar3} color={"#16a085"} />
        </div>
      </div>
    );
  }
}

const styles = {
  centeredTitle: {
    textAlign: "center",
  },
  bars: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 40px",
  },
  salary: {
    textAlign: "-webkit-center",
  },
};
