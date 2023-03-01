


//Component to display the image, title and description of a video
const VideoPresenter = ({video}) => {
    return ( 
        <div>
            <div>
                <img src={video.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div>
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
     );
}
 
export default VideoPresenter;