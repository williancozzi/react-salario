import React, { Component } from "react";
import ColorBar from "./components/color-bar/ColorBar";
import InputFullSalary from "./components/input-full-salary/InputFullSalary";
import InputReadOnly from "./components/input-readonly/InputReadOnly";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.centeredTitle}>React Salário</h1>
        <div>
          <InputFullSalary title={"Salário Bruto:"} />
          <InputReadOnly title={"Base INSS:"} />
          <InputReadOnly color={"#e67e22"} title={"Desconto INSS:"} />
          <InputReadOnly title={"Base IRPF:"} />
          <InputReadOnly color={"#c0392b"} title={"Desconto IRPF:"} />
          <InputReadOnly color={"#16a085"} title={"Salário Líquido:"} />
        </div>
        <div style={styles.bars}>
          <ColorBar value={20} color={"#e67e22"} />
          <ColorBar value={10} color={"#c0392b"} />
          <ColorBar value={70} color={"#16a085"} />
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
};
