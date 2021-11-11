import VideoItem from './videoItem';
import classes from './videoList.module.css';

function VideoList(props) {
  return (
    <ul className={classes.list}>
      {props.videos.map((video) => (
        <VideoItem
          key={video.key}
          video={video}
        />
      ))}
    </ul>
  );
}

export default VideoList;
