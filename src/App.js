// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { typography } from "@mui/system";

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
          <Typography variant="h4">Tip Calculator</Typography>
          <Typography variant="h5" my={2}>
            How much was your bill?
          </Typography>
          {/* <label htmlFor="#">$</label> */}
          <TextField
            id="outlined-basic"
            label="$"
            variant="outlined"
            onChange={this.changeState}
            name="bill"
          />
          {/* <input
            type="number"
            name="bill"
            placeholder="Bill amount"
            onChange={this.changeState}
          /> */}
          <Typography variant="h5" my={2}>
            How was your service?
          </Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Service level
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={this.state.serviceLevel}
                label="Service level"
                onChange={this.changeState}
                name="serviceLevel"
              >
                <MenuItem value={10}>Normal 10%</MenuItem>
                <MenuItem value={20}>Good 20%</MenuItem>
                <MenuItem value={30}>Great 30%</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* <select name="serviceLevel" id="serve" onChange={this.changeState}>
            <option value="30">Great 30%</option>
            <option value="20">Good 20%</option>
            <option value="10">Normal 10%</option>
          </select> */}
          <Typography variant="h5" my={2}>
            How many people are sharing the bill?
          </Typography>
          <TextField
            id="outlined-basic"
            label="People"
            variant="outlined"
            name="numOfPeople"
            onChange={this.changeState}
          />

          {/* <input
            onChange={this.changeState}
            type="number"
            placeholder="number of people"
            name="numOfPeople"
          /> */}
          {/* <label htmlFor="">People</label> */}
          <Stack direction="column" spacing={5} m="40px">
            <Button p={2} variant="contained" onClick={this.calculateTips}>
              Calculate
            </Button>
          </Stack>

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
