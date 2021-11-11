import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './videoItem.module.css';
import FavoritesContext from '../../store/Context/context';
import { useHistory } from 'react-router';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.video.id.videoId);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.video.id.videoId);
    } else {
      favoritesCtx.addFavorite(props.video);
    }
  } 
  const hist = useHistory()

  function regardeVideoHandler(video){
     favoritesCtx.setvideoDirect(video);
     hist.push('/video')
  }
  
  return (  
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.video.snippet.thumbnails.high.url} alt={props.video.snippet.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.video.snippet.title}</h3>
          <div className={classes.details}><p><b>Chaine :</b> {props.video.snippet.channelTitle}</p> 
                <p><b>Date :</b> {props.video.snippet.publishedAt.substring(0,9)}</p></div>
         
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'supprimer de favoris' : 'Ajouter au favoris'}
          </button>
          <button onClick={()=> regardeVideoHandler(props.video)}>regarde le video </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
