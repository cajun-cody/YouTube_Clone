import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import axios from "axios";
import React, {useState} from "react";
import CommentList from "../../components/CommentList/CommentList";
/* import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import RelatedVideos from "../RelatedVideos/RelatedVideos"; */


//Page to play video and display content
const VideoPage = (props) => {
    
    // const {videoId} = useParams();
    const [videoId, setVideoId] = useState("W6NZfCO5SIk")
    const [video, setVideo] = useState()

    async function getVideo() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDK84QLK5efmAEb9qPKEjNS5Tvy4KVFRek&maxResults=5&part=snippet`);
        setVideo(response.data.items[0]);
        console.log(response)
    }

    return ( 
        <div>
            <button onClick={()=> getVideo()}>Get Video By Id</button>
            <VideoPlayer videoId={videoId} video={video}/>
            <CommentList videoId={videoId} video={video}/>
        </div>
     );
}
 
export default VideoPage;           

        /* <CommentForm/>
            
            <RelatedVideos/> */