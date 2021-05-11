import React from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
export default function Video() {
  return (
    <ReactTwitchEmbedVideo
      channel={"gersogogi"}
      layout={"video"}
      width={"100%"}
      height={"100%"}
    />
  );
}
