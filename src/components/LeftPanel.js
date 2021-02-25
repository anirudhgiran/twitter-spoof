import React from "react";

//Styles Imports
import "../styles/leftPanelStyles/leftPanelStyle.css";

//Left Panel Component Imports
import Header from "./leftPanelComponents/Header";
import MenuOptions from "./leftPanelComponents/MenuOptions";

//React Router DOM Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Material UI Icons Imports
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

//Responsive-React Imports
import { Responsive, IdResponsiveRenderOnlyIn } from "responsive-react";

const LeftPanel = () => {
  return (
    <div className="leftPanel">
      <Header />

      <div className="navLinks">
        <Router>

          {/* Display for Mobile-Landscape and Laptop */}
          <Responsive displayIn={[IdResponsiveRenderOnlyIn.Laptop, IdResponsiveRenderOnlyIn.MobileLandScape]}>
            <MenuOptions url="/home" Icon={HomeIcon} text="Home" />
            <MenuOptions url="/explore" Icon={SearchIcon} text="Explore" />
            <MenuOptions
              url="/notifications"
              Icon={NotificationIcon}
              text="Notifications"
            />
            <MenuOptions url="/messages" Icon={MailOutlineIcon} text="Messages" />
            <MenuOptions
              url="/bookmarks"
              Icon={BookmarkBorderIcon}
              text="Bookmarks"
            />
            <MenuOptions
              url="/lists"
              Icon={FormatListBulletedIcon}
              text="Lists"
            />
            <MenuOptions url="/profile" Icon={PersonOutlineIcon} text="Profile" />
            <MenuOptions url="/more" Icon={MoreHorizIcon} text="More" />
          </Responsive>

          {/* Display for Mobile-Portrait */}
          <Responsive displayIn={IdResponsiveRenderOnlyIn.Mobile}>
          <MenuOptions url="/home" Icon={HomeIcon}  />
            <MenuOptions url="/explore" Icon={SearchIcon} />
            <MenuOptions
              url="/notifications"
              Icon={NotificationIcon}
            />
            <MenuOptions url="/messages" Icon={MailOutlineIcon} />
            <MenuOptions url="/profile" Icon={PersonOutlineIcon} />
          </Responsive>
        </Router>
      </div>

      <button className="tweetBtn">Tweet</button>
    </div>
  );
};

export default LeftPanel;
