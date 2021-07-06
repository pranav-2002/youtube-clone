import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { Link } from "react-router-dom";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verified && (
            <CheckCircleRoundedIcon
              style={{ color: "grey", marginLeft: "5" }}
              fontSize="small"
            />
          )}{" "}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos{" "}
        </p>
        <p>{description}</p>
        <Link to="#">
          <h3 className="channelRow__subscribe">SUBSCRIBE</h3>
        </Link>
      </div>
    </div>
  );
}

export default ChannelRow;
