import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  function truncate(string, n) {
    if (string.length > n) {
      return string.substr(0, n - 1) + "...";
    } else {
      return string;
    }
  }

  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={channel} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          src={channelImage}
          alt={channel}
        />
        <div className="videoCard__text">
          <h4>{truncate(title, 40)}</h4>
          <p className="videoCard__channel">{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
