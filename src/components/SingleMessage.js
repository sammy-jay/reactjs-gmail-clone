import React from "react";
import "./SingleMessage.css";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

function SingleMessage() {
  return (
    <div className="single__message">
      <IconButton className="one">
        <CheckBoxOutlineBlankIcon />
      </IconButton>
      <IconButton className="two">
        <StarOutlineIcon />
      </IconButton>
      <IconButton className="three">
        <DoubleArrowIcon />
      </IconButton>
      <h3 className="four">sammy@gmail.com</h3>
      <div className="seven" />
      <p className="main five">
        <strong>Facebook Registration</strong> Complete your registration...
      </p>
      <strong className="six">Mon, 21 Feb 2022 20:38:25 GMT</strong>
    </div>
  );
}

export default SingleMessage;
