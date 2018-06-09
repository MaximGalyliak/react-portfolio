import React, { Component } from "react";
//material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import GreenGray from "../assets/theme/GreenGrey";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//custom
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import Tab from "./Tab";
import Background from "./Background";

class Page extends Component {
  constructor() {
    super();
    //state
    this.state = {
      windowHeight: 0,
      slide: 1,
    };
  }
  _updateHeight = () => {
    this.setState({ windowHeight: window.innerHeight });
  };

  componentWillMount() {
    this._updateHeight();
  }
  componentDidMount() {
    window.addEventListener("resize", this._updateHeight);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this._updateHeight);
  }
  changeSlide = number => {
    return () => {
      return this.setState({ slide: number });
    };
  };

  render() {
    return (
      <MuiThemeProvider theme={GreenGray}>
        <CssBaseline />
        <Background />
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Grid container justify="center">
              <Grid item xs={6}>
                <Tab onClick={this.changeSlide(1)}>About</Tab>
              </Grid>
              <Grid item xs={6}>
                <Tab onClick={this.changeSlide(2)}>Work</Tab>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: 80 }}>
          {this.state.slide === 1 && <FirstSlide />}
          {this.state.slide === 2 && <SecondSlide />}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Page;
