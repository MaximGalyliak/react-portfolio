import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { projects } from "../assets/data";
import AnimatedCard from "./AnimatedCard";

class SecondSlide extends Component {
  componentDidMount() {
    window.removeEventListener("wheel", this.props.scroll);
  }
  componentWillUnmount() {
    window.addEventListener("wheel", this.props.scroll);
  }
  render() {
    return (
      <Grid
        container
        direction="row"
        spacing={40}
        justify="space-around"
        alignItems="flex-start"
        //fix for grid container causing vertical overflow
        style={{
          margin: 0,
          width: "100%",
          msOverflowX: "hidden",
          overflowX: "hidden",
        }}
      >
        {projects.map((project, index) => {
          return (
            <Grid item key={project.title}>
              <AnimatedCard
                title={project.title}
                img={project.img}
                delay={index * 300}
                description={project.description}
                link={project.link}
                tools={project.tools}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
export default SecondSlide;
