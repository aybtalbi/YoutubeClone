import { Route, Switch } from 'react-router-dom';

import TousLesVideos from './pages/TousLesVideos';
import MesFavoris from './pages/MesFavoris';
import Layout from './components/layout/Layout';
import Video from './components/videos/Video';



function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <TousLesVideos />
        </Route>
        <Route path='/favoris'>
          <MesFavoris />
        </Route>
        <Route path='/video'>
          <Video />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
