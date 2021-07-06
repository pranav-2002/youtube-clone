import React from "react";
import "./VideoRow.css";
import Avatar from "@material-ui/core/Avatar";

function VideoRow({
  views,
  description,
  timestamp,
  channel,
  title,
  image,
  channelImage,
}) {
  return (
    <div className="videoRow">
      <img className="videoRow__thumbnail" src={image} alt={title} />
      <div className="videoRow__text">
        <h3 className="videoRow__title">{title}</h3>
        <p className="videoRow__views">
          {views} views • {timestamp} ago
        </p>
        <div className="videoRow__channelInfo">
          <Avatar
            className="videoRow__avatar"
            src={channelImage}
            alt={channel}
          />
          <p className="videoRow__headline">{channel}</p>
        </div>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
