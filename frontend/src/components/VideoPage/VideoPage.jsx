import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import RelatedVideos from "../RelatedVideos/RelatedVideos";




//Component to display a video with comments and replies
const VideoPage = ({}) => {
    return ( 
        <div>
            <VideoPlayer/>
            <CommentList/>
            <CommentForm/>
            <RelatedVideos/>
        </div>
     );
}
 
export default VideoPage;