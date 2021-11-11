import axios from 'axios';

export default function  ApiYoutube() {

    const youtubeApi = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
            part: 'snippet',
            maxResults: 6,
            key: 'AIzaSyAnFykwz8PKOIHh3VVCCb7cCdZj9hdFBDs',
            type:'video'   
        }
    })

    return youtubeApi
} 