import React from "react";
import Button from "@material-ui/core/Button";
import { bio } from "../assets/data";
import * as icons from "./Icons";

const Connect = props => {
  return (
    <React.Fragment>
      <Button variant="flat" color="primary" href={bio.link.Email}>
        <icons.GmailIcon color="primary" />
        Email
      </Button>
      <Button
        variant="flat"
        color="primary"
        href={bio.link.LinkedIn}
        target="_blank"
      >
        <icons.LinkedInIcon color="primary" />
        LinkedIn
      </Button>
      <Button
        variant="flat"
        color="primary"
        href={bio.link.StackOverflow}
        target="_blank"
      >
        <icons.StackOverfrowIcon color="primary" />
        Stack overflow
      </Button>
      <Button
        variant="flat"
        color="primary"
        href={bio.link.GitHub}
        target="_blank"
      >
        <icons.GitHubIcon color="primary" />
        GitHub
      </Button>
    </React.Fragment>
  );
};
export default Connect;
