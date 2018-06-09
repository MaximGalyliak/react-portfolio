import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { ArrowDownIcon, WebIcon, GitHubIcon } from "./Icons";

const AnimatedCard = props => {
  return (
    <Slide
      direction="left"
      in={true}
      // style={{ transitionDelay: props.delay }} - one by one
      timeout={props.delay}
      mountOnEnter
      unmountOnExit
    >
      <Card style={{ maxWidth: 400 }}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ArrowDownIcon color="primary" />}>
            <Typography variant="title">{props.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {props.tools && (
              <List dense>
                {props.tools.split("*").map((e, i) => {
                  return (
                    <ListItem key={e + i}>
                      <Typography>{e}</Typography>
                    </ListItem>
                  );
                })}
              </List>
            )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <CardMedia
          image={props.img}
          title={props.title}
          style={{
            height: 0,
            paddingTop: "56.25%",
          }}
        />
        <CardContent>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="flat"
            color="primary"
            href={props.link.REPO}
            target="_blank"
          >
            <GitHubIcon color="primary" />
            GitHub
          </Button>
          {props.link.WEBSITE && (
            <Button
              variant="flat"
              color="primary"
              href={props.link.WEBSITE}
              target="_blank"
            >
              <WebIcon color="primary" />
              Web site
            </Button>
          )}
        </CardActions>
      </Card>
    </Slide>
  );
};
export default AnimatedCard;
