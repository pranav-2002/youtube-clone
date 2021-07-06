import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon style={{ color: "grey" }} />
        <h2>FILTERS</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Samay Raina"
        verified
        subs="701k"
        noOfVideos="476"
        description="I was a standup comedian before someone ate a bat."
      />
      <hr />
      <h1 className="searchPage__channelContent">Latest from Samay Raina</h1>
      <VideoRow
        views="311K"
        description="Join my Subreddit: https://www.reddit.com/r/SamayRaina/ MERCH: https://www.redwolf.in/samay-raina BECOME DIAMOND ..."
        timestamp="1 day"
        channel="Samay Raina"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
        title="I TOOK THE DO NOT LAUGH CHALLENGE | REDDIT REVIEW"
        image="https://i.ytimg.com/vi/7SHR2hIcHiY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhYidTvm9cCeC6yqUrB3v0i64Ijg"
      />
      <VideoRow
        views="149K"
        description="Join PokerStars India and play poker for free! Are you in? Are you a college student? Register for the World College Poker Event ..."
        timestamp="Streamed 1 day"
        channel="Samay Raina"
        title="Sundays with Pokerstars Ft. @Baba Sehgal Entertainment @Rohan Joshi @Sorabh Pant @Ashish Shakya"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
        image="https://i.ytimg.com/vi/eWp8RKzzfR4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYBkDaRrJErW8a8c1FE_5id88W3A"
      />
      <hr />
      <VideoRow
        views="283K"
        description="----------------------------------------------------------------------------------------------------------------------------------- Use my code SAMAY2021 for ..."
        timestamp="Streamed 4 weeks ago"
        channel="Samay Raina"
        title="YOU WILL FORGET ABOUT WWE AFTER WATCHING THIS"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
        image="https://i.ytimg.com/vi/d7-uuSj9vGk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHFJIrElVNxc10_bsUj5X_o1fPdg"
      />
      <VideoRow
        views="583K"
        description="Agar yeh video like nahi kari toh dhikkaar hai tumhaari jawaani par Check out GMD channel: ..."
        timestamp="1 month"
        channel="Samay Raina"
        title="YOU WILL FORGET ABOUT WWE AFTER WATCHING THIS"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
        image="https://i.ytimg.com/vi/R6t0f1_vwno/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbZWPRY9D5QDvqyZtvGkoACfh-Wg"
      />
      <VideoRow
        views="377K"
        description="Check out Mamaearth's Apple Cider Vinegar Hair Range Mamaearth : https://bit.ly/3yJzBMo (Use my code SAMAY2021 for 20% ..."
        timestamp="3 weeks"
        channel="Samay Raina"
        title="My Fitness Trainer Made Me Gain Weight ft. My Cook | VLOG 10"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
        image="https://i.ytimg.com/vi/Wze58LNJonA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoUYRrgypvT0t2IjnEmHYh_tXi7w"
      />
      <VideoRow
        views="961K"
        description="----------------------------------------------------------------------------------------------------------------------------------- Use my code SAMAY2021 for ..."
        timestamp="3 weeks"
        channel="Samay Raina"
        title="I Made AAMIR KHAN Laugh ft. ARIJIT SINGH"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
        image="https://i.ytimg.com/vi/XDuMwuyS06w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBoXWQUZ4VtB_HfEEDeeoxfU5OdA"
      />
      <VideoRow
        views="374K"
        description="Donate here: Camp Dairies NGO UPI ID: cdcreatingdreamstrust@icici Or pay using the bank account details. A/C Name: ..."
        timestamp="Streamed 6 days"
        channel="Samay Raina"
        title="Geoguessr, Reddit and Chess ft. Avika Gor, Vivek Desai and friends"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
        image="https://i.ytimg.com/vi/i5PG--TFfz4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZHrW0Lvn-27l6mMQiWt_PJk68-A"
      />
      <VideoRow
        views="454K"
        description="Join my Subreddit: https://www.reddit.com/r/SamayRaina/ MERCH: https://www.redwolf.in/samay-raina BECOME DIAMOND ..."
        timestamp="2 months"
        channel="Samay Raina"
        title="REACTING TO MEMES on my SUBREDDIT ft. Shamerfleet"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
        image="https://i.ytimg.com/vi/yYBF-zWMx0c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM813XKiDK71P-_Exv-P6bpWNP7w"
      />
    </div>
  );
}

export default SearchPage;
