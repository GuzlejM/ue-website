"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import React from "react";

interface YoutubePlayerProps {
  id: string;
  title: string;
  [key: string]: any;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ id, title, ...others }) => {
  return <LiteYouTubeEmbed id={id} title={title} {...others} />;
};

export default YoutubePlayer; 