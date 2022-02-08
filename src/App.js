import logo from "./logo.svg";
import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      serviceLevel: 30,
      bill: "",
      numOfPeople: "",
      tip: "",
      clicked: false,
    };
  }

  calculateTips = (e) => {
    const { serviceLevel, bill, numOfPeople } = this.state;
    let tipAmount = (bill * serviceLevel) / 100 / numOfPeople;
    this.setState({ tip: tipAmount, clicked: !this.state.clicked });
  };

  changeState = (e) => {
    let name = e.target.name;
    this.setState({ [name]: +e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          <h1>Tip Calculator</h1>
          <p>How much was your bill?</p>
          <label htmlFor="#">$</label>
          <input
            type="number"
            name="bill"
            placeholder="Bill amount"
            onChange={this.changeState}
          />
          <p>How was your service?</p>
          <select name="serviceLevel" id="serve" onChange={this.changeState}>
            <option value="30">Great 30%</option>
            <option value="20">Good 20%</option>
            <option value="10">Normal 10%</option>
          </select>
          <p>How many people are sharing the bill?</p>
          <input
            onChange={this.changeState}
            type="number"
            placeholder="number of people"
            name="numOfPeople"
          />
          <label htmlFor="">People</label>
          <button className="btn" onClick={this.calculateTips}>
            Calculate
          </button>

          <p
            style={
              this.state.clicked ? { display: "block" } : { display: "none" }
            }
          >
            Tip for each: $<span>{this.state.tip}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
