import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SportsIcon from "@material-ui/icons/Sports";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import TheatersIcon from "@material-ui/icons/Theaters";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Explore" Icon={ExploreIcon} />
      <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <hr />
      <div className="sidebar__write">
        <p className="sidebar__signIn">
          Sign in to like videos,
          <br /> comment, and subscribe.
        </p>
        <AccountCircleIcon fontSize="large" className="sidebar__account" />
      </div>
      <hr />
      <div className="sidebar__bestofyt">
        <h3 className="sidebar__best">BEST OF YOUTUBE</h3>
        <SidebarRow title="Music" Icon={MusicNoteIcon} />
        <SidebarRow title="Sports" Icon={SportsIcon} />
        <SidebarRow title="Games" Icon={SportsEsportsIcon} />
        <SidebarRow title="Movies" Icon={TheatersIcon} />
        <SidebarRow title="News" Icon={AnnouncementIcon} />
        <SidebarRow title="Live" Icon={LiveTvIcon} />
        <SidebarRow title="Fashion & Beauty" Icon={LocalMallIcon} />
        <SidebarRow title="Learning" Icon={EmojiObjectsIcon} />
        <SidebarRow title="Spotlight" Icon={YouTubeIcon} />
        <SidebarRow title="360 Video" Icon={ThreeDRotationIcon} />
      </div>
      <hr />
      <SidebarRow title="Browse channels" Icon={AddCircleOutlineRoundedIcon} />
      <hr />
      <div className="sidebar__bestofyt">
        <h3 className="sidebar__best">MORE FROM YOUTUBE</h3>
        <SidebarRow title="YouTube Premium" Icon={YouTubeIcon} />
        <SidebarRow title="Live" Icon={LiveTvIcon} />
      </div>
      <hr />
      <SidebarRow title="Settings" Icon={SettingsIcon} />
      <SidebarRow title="Report history" Icon={FlagIcon} />
      <SidebarRow title="Help" Icon={HelpIcon} />
      <SidebarRow title="Send feedback" Icon={FeedbackIcon} />
      <hr />
      <div className="sidebar__footer">
        <p>
          About Press Copyright <br /> Contact us Creators Advertise <br />
          Developers <br /> <br /> Terms PrivacyPolicy & Safety <br /> How
          YouTube works <br /> Test new features <br /> <br /> © 2021 Google LLC
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
