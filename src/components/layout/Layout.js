import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import MenuDeFilter from './MenuDeFilter';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <MenuDeFilter/>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
