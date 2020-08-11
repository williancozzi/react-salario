import React, { Component } from "react";
import ColorBar from "./components/color-bar/ColorBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.centeredTitle}>React Salário</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px 40px",
          }}
        >
          <ColorBar value={20} color={"orange"} />
          <ColorBar value={10} color={"red"} />
          <ColorBar value={70} color={"green"} />
        </div>
      </div>
    );
  }
}

const styles = {
  centeredTitle: {
    textAlign: "center",
  },
};
