import { useState, useEffect ,useContext } from 'react';
import ApiYoutube from '../store/API/ApiYoutube'
import VideoList from '../components/videos/VideoList';
import Context from '../store/Context/context';
import Spinner from '../components/ui/Spinner';
import Spinner2 from '../components/ui/Spinner2';

function TousLesVideos() { 
  const ctx = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedvideos, setLoadedvideos] = useState([]);
  const [isScrolling, setScrolling] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSuivant,setPageSuivant] = useState('')
  const recherche = ctx.recherche
  const ordreRecherche = ctx.ordreRecherche

  useEffect(() => {
    !isScrolling && setIsLoading(true);
    ApiYoutube().get('/search', { params: {  q: recherche , pageToken:isScrolling ? pageSuivant : null , order:ordreRecherche} })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setPageSuivant(data.nextPageToken)
        const videos = [];
        for (const key in data.items) {
          const video = {
            key: key ,
            ...data.items[key]
          };
          //
          videos.push(video);
        }
        setIsLoading(false);
        //au cas du scrolling on ajoute les nouveaux videos par concat
        isScrolling ? setLoadedvideos([...loadedvideos,...videos]):
        // cas du recherche
        setLoadedvideos(videos)

        setScrolling(false)
      });
  }, [recherche,page,ordreRecherche]);


  window.onscroll = function () {
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
    {
      setScrolling(true)
      setPage(prevPage => prevPage+1)
    }
  }

  if (isLoading) {
    return (
      <Spinner/>
    );
  }

  return (
    <section>
      <VideoList videos={loadedvideos} />
      {isScrolling && <Spinner2/>}
    </section>
  );
}

export default TousLesVideos;
