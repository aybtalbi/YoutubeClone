import React from "react";
import FavoritesContext from "../../store/Context/context";
import classes from "./Video.module.css";

import { useContext } from "react";
import Card from "../ui/Card";

const Video = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const video = favoritesCtx.videoDirect;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}/?autoplay=1`;
  return (
    <Card>
      <iframe
        className={classes.player}
        src={videoSrc}
        allowFullScreen
        title="Video player"
      />
      <div className={classes.content}>
        <h4>{video.snippet.title}</h4>
        <div>
          <p>
            <b>description :</b> {video.snippet.description}
          </p>
          <br/>
        </div>
      </div>
    </Card>
  );
};

export default Video;
