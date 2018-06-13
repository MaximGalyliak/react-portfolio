import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { bio } from "../assets/data";
import Slide from "@material-ui/core/Slide";
import TextParser from "./TextParser";
import Connect from "./Connect";

class FirstSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: [],
    };
  }
  _renderChips = () => {
    var arr = bio.skills.split(/\s*,\s*/);
    var chips = [];
    arr.map((element, index) => {
      chips.push(<Chip key={element} label={element} style={{ margin: 8 }} />);
    });
    this.setState({ chips: chips });
  };
  componentWillMount() {
    this._renderChips();
  }
  render() {
    return (
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        spacing={40}
        //fix for grid container causing vertical overflow
        style={{
          margin: 0,
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Slide
          direction="right"
          in={true}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          <Grid item md={6} xs={12}>
            <Typography variant="display2" gutterBottom align="right">
              Hello There!
            </Typography>
            <Typography variant="body2" align="right">
              <TextParser string={bio.description} />
            </Typography>
          </Grid>
        </Slide>
        <Slide
          direction="right"
          in={true}
          timeout={600}
          mountOnEnter
          unmountOnExit
        >
          <Grid item md={6} xs={12}>
            <Typography variant="display2" gutterBottom align="left">
              Skills
            </Typography>
            {this.state.chips}
          </Grid>
        </Slide>
        <Slide
          direction="right"
          in={true}
          timeout={900}
          mountOnEnter
          unmountOnExit
        >
          <Grid item xs={12}>
            <Typography variant="title" gutterBottom align="center">
              Ways to connect with me:
            </Typography>
            <Typography variant="title" align="center">
              <Connect />
            </Typography>
          </Grid>
        </Slide>
      </Grid>
    );
  }
}
export default FirstSlide;
