import "./BodyNav.css";
import React from "react";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import InboxIcon from "@material-ui/icons/Inbox";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

function BodyNav() {
  return (
    <div className="bodyNav">
      <div className="bodyNav__first">
        <div className="left">
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="right">
          <p>1 - 50 of 235</p>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="bodyNav__second">
        <div className="item1">
          <InboxIcon />
          <span>Primary</span>
        </div>
        <div className="">
          <PeopleIcon />
          <span>Social</span>
        </div>
        <div className="">
          <LocalOfferIcon />
          <span>Promotions</span>
        </div>
      </div>
    </div>
  );
}

export default BodyNav;
