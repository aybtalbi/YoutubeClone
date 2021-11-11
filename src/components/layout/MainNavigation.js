import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/Context/context';
import React from 'react';
import logo from '../../asset/youtubeImg.png'

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

function handleChange(event) {
  favoritesCtx.setrechercheState(event.target.value);
}

  return (
    <header className={classes.header}>
      <div className={classes.logo}> <Link to='/'><img src={logo} /></Link></div>
      <input className={classes.rech} onChange={handleChange} type="text" placeholder="recherche.."/>
      <nav>
        <ul>
          <li>
            <Link to='/'>Videos</Link>
          </li>
          <li>
            <Link to='/favoris'>
            Favoris
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(MainNavigation);
