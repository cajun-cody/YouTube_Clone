import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import VideoPresenter from "../VideoPresenter/VideoPresenter";
import "./RelatedVideos.css";



//Component to display videos related to a searched video
const RelatedVideos = ({ videoId, setVideoId }) => {

    const [relatedVideos, setRelatedVideos] = useState([]);

    async function getRelatedVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyDK84QLK5efmAEb9qPKEjNS5Tvy4KVFRek&part=snippet&maxResults=4`);
        setRelatedVideos(response.data.items)
        console.log(response.data.items)
    }


    useEffect(() => getRelatedVideos(), [videoId])
    


    return ( 
        <div className="related-vids">
            {relatedVideos.map( item => <Link to={`/video/${item.id.videoId}`} onClick={() => setVideoId(item.id.videoId)}>
            <VideoPresenter dontShowDescription video={item}/>
            </Link>)}
        </div>
     );
}
 
export default RelatedVideos;

/* <button onClick={() => getRelatedVideos()}>Related Videos</button> */

