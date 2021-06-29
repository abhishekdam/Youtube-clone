import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon></MenuIcon>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/id/thumb/b/b5/Youtube_Logo_2005.png/250px-Youtube_Logo_2005.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton"></SearchIcon>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon"></VideoCallIcon>
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <AccountCircleIcon
          className="header__icon"
          alt="Tomnomnom"
          src="https://avatars0.githubusercontent.com/u/50357969?s=460&u=95f9a7d2c9083d9beb17945c4e358e0aa3421ce7&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
