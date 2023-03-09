import "./VideoPresenter.css";

//Component to display the image, title and description of a video
const VideoPresenter = ({video , dontShowDescription}) => {
    return ( 
        <div className="grid-presenter">
            <div className="img">
                <img src={video.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div>
                <h3>{video.snippet.title}</h3>
            
            </div>
        </div>
     );
}
 
export default VideoPresenter;

// {!dontShowDescription&&<p>{video.snippet.description}</p>}