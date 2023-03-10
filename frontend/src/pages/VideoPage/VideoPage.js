import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import axios from "axios";
import React, {useEffect, useState } from "react";
import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm/CommentForm";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import './VideoPage.css';


//Page to play video and display content
const VideoPage = (props) => {
    //Passed videoId as a param down to videoIdInPage state to show related videos of a new video.
    const {videoId} = useParams();
    const [videoIdInPage, setVideoId] = useState(videoId)
    const [video, setVideo] = useState()
    

    async function getVideo() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoIdInPage}&key=AIzaSyDK84QLK5efmAEb9qPKEjNS5Tvy4KVFRek&maxResults=5&part=snippet`);
        setVideo(response.data.items[0]);
        console.log(response)
    }
    //Effect if l video link changes getVideo function and look for videoId. 
    useEffect( () => getVideo(),[videoId]) 

    return ( 
        <div className="container-fluid">
            <div className="player-comment">
                <div className="player-container">
                <VideoPlayer videoId={videoIdInPage} video={video}/> 
                </div>
                <div className="comment-container">
                    <div className="comment-form">
                    <CommentForm videoId={videoIdInPage} video={video}/>  
                    </div>
                    <div className="comments-sec"><h3 className="h3">Comments</h3>
                    <CommentList videoId={videoIdInPage} video={video}/>
                    </div>
                </div>
            </div>
            <div className="related-videos">
                <RelatedVideos videoId={videoIdInPage} setVideoId={setVideoId}/>
            </div>
        </div>
     );
}
 
export default VideoPage;           

/* <button onClick={()=> getVideo()}>Get Video By Id</button> */