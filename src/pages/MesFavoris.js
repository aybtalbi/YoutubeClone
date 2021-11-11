import { useContext } from 'react';
import Context from '../store/Context/context';
import VideoList from '../components/videos/VideoList';

function MesFavoris() {
  const favoritesCtx = useContext(Context);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>Vous n'avez pas encore de favoris. Commencer à en ajouter ?</p>;
  } else {
    content = <VideoList videos={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Mes Favoris</h1>
      {content}
    </section>
  );
}

export default MesFavoris;
