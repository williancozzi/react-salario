import React, { Component } from "react";
import ColorBar from "./components/color-bar/ColorBar";
import InputFullSalary from "./components/input-full-salary/InputFullSalary";
import InputReadOnly from "./components/input-readonly/InputReadOnly";
import {
  formatNumber,
  formatToBrl,
  getPercent,
} from "./helpers/formatHelper.js";
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
      bar1: 0,
      bar2: 0,
      bar3: 0,
      percentINSS: 0,
      percentIRPF: 0,
      percentNet: 0,
    };
  }

  handleChangeInput = (newValue) => {
    const finalValue = calculateSalaryFrom(newValue);
    formatNumber(finalValue);

    this.setState({
      baseINSS: formatToBrl(finalValue.baseINSS),
      discountINSS: formatToBrl(finalValue.discountINSS),
      baseIRPF: formatToBrl(finalValue.baseIRPF),
      discountIRPF: formatToBrl(finalValue.discountIRPF),
      netSalary: formatToBrl(finalValue.netSalary),
      bar1: finalValue.discountINSS,
      bar2: finalValue.discountIRPF,
      bar3: finalValue.netSalary,
      percentINSS: getPercent(finalValue.discountINSS, finalValue.baseINSS),
      percentIRPF: getPercent(finalValue.discountIRPF, finalValue.baseINSS),
      percentNet: getPercent(finalValue.netSalary, finalValue.baseINSS),
    });
  };

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
      percentINSS,
      percentIRPF,
      percentNet,
    } = this.state;

    return (
      <div>
        <h1 style={styles.centeredTitle}>React Salário</h1>
        <div style={styles.salary}>
          <InputFullSalary
            onChangeInput={this.handleChangeInput}
            onChange={this.handleChangeBar1}
            title={"Salário Bruto:"}
          />
        </div>

        <div style={styles.salary}>
          <div style={styles.readInput}>
            <InputReadOnly value={baseINSS} title={"Base INSS:"} />

            <InputReadOnly
              color={"#e67e22"}
              value={`${discountINSS} (${
                isNaN(percentINSS) ? 0 : percentINSS
              }%)`}
              title={"Desconto INSS:"}
            />

            <InputReadOnly value={baseIRPF} title={"Base IRPF:"} />

            <InputReadOnly
              color={"#c0392b"}
              value={`${discountIRPF} (${
                isNaN(percentIRPF) ? 0 : percentIRPF
              }%)`}
              title={"Desconto IRPF:"}
            />
          </div>
          <InputReadOnly
            color={"#16a085"}
            value={`${netSalary} (${isNaN(percentNet) ? 0 : percentNet}%)`}
            title={"Salário Líquido:"}
          />
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

// css
const styles = {
  centeredTitle: {
    textAlign: "center",
  },
  bars: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "0px 70px",
  },
  salary: {
    textAlign: "-webkit-center",
  },
  readInput: {
    display: "flex",
    padding: "10px 0px",
    width: "90%",
  },
};
