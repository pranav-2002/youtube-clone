import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Logo from "../images/logo.png";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ color: "white" }} />
        <Link to="/">
          <img src={Logo} alt="logo" className="header__logo" />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon
            style={{ color: "grey" }}
            className="header__inputButton"
          />
        </Link>
        <MicIcon style={{ color: "white" }} className="header__inputMic" />
      </div>
      <div className="header__icons">
        <VideoCallIcon
          style={{ color: "white" }}
          className="header__rightIcons"
        />
        <AppsIcon style={{ color: "white" }} className="header__rightIcons" />
        <NotificationsIcon
          style={{ color: "white" }}
          className="header__rightIcons"
        />
        <Avatar
          className="header__rightIcons header__accountIcon"
          src="https://yt3.ggpht.com/yti/APfAmoEpOiuKMmgnzeq1aBRVVTwZKh3wxD2u07uunYITFA=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="profile picture"
        />
      </div>
    </div>
  );
}

export default Header;
