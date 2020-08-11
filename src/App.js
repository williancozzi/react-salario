import React, { Component } from "react";
import ColorBar from "./components/color-bar/ColorBar";
import InputFullSalary from "./components/input-full-salary/InputFullSalary";
import InputReadOnly from "./components/input-readonly/InputReadOnly";
import { formatNumber } from "./helpers/formatHelper.js";
import { calculateSalaryFrom } from "./helpers/salary.js";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      netSalary: 0,
      bar1: 33,
      bar2: 33,
      bar3: 33,
    };
  }

  handleChangeInput = (newValue) => {
    const finalValue = calculateSalaryFrom(newValue);
    formatNumber(finalValue);

    this.setState({
      baseINSS: finalValue.baseINSS,
      discountINSS: finalValue.discountINSS,
      baseIRPF: finalValue.baseIRPF.toFixed(2),
      discountIRPF: finalValue.discountIRPF,
      netSalary: finalValue.netSalary.toFixed(2),
    });
  };

  // handleChangeBar1 = (event) => {
  //   const bar1 = +event.target.value;
  //   const bar2 = +event.target.value - bar1;
  //   const bar3 = +event.target.value - bar1;

  //   this.setState({ bar1, bar2, bar3 });
  // };

  render() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      bar1,
      bar2,
      bar3,
    } = this.state;

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
          <div style={styles.readInput}>
            <InputReadOnly value={baseINSS} title={"Base INSS:"} />
            <InputReadOnly value={discountINSS} title={"Desconto INSS:"} />
            <InputReadOnly value={baseIRPF} title={"Base IRPF:"} />
            <InputReadOnly value={discountIRPF} title={"Desconto IRPF:"} />
            <InputReadOnly value={netSalary} title={"Salário Líquido:"} />
          </div>
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
    justifyContent: "center",
    padding: "0px 40px",
  },
  salary: {
    textAlign: "-webkit-center",
  },
  readInput: {
    display: "flex",
    backgroundColor: "rgba(245, 245, 190, 0.842)",
    padding: "10px 0px",
    width: "90%",
    marginLeft: "30px",
  },
};
