import { createContext, useState } from 'react';

const Context = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorite) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
  setvideoDirect : (video) => {},
  setrechercheState : (rech) => {},
  videoDirect : {},
  recherche : '',
  ordreRecherche : ''
});

export function ContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [videoDirect, setvideoDirect] = useState({});
  const [rechercheState, setrechercheState] = useState('paris');
  const [ordreRecherche , setOrdreRecherche] = useState('date')

  function addFavoriteHandler(favoritevideo) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritevideo);
    });
  }

  function removeFavoriteHandler(videoId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(video => video.id.videoId !== videoId);
    });
  }

  function itemIsFavoriteHandler(videoId) {
    return userFavorites.some(video => video.id.videoId === videoId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
    videoDirect : videoDirect,
    setvideoDirect : setvideoDirect,
    recherche : rechercheState ,
    setrechercheState : setrechercheState,
    ordreRecherche : ordreRecherche ,
    setOrdreRecherche : setOrdreRecherche 
  };

  return (
    <Context.Provider value={context}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
