import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"

/* import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import RelatedVideos from "../RelatedVideos/RelatedVideos"; */




//Component to map over a set of searched videos
const VideoPage = ({}) => {
    const [videos, setVideos] = useState([])

    return ( 
        <div>
            <VideoPlayer videos={videos}/>

        </div>
     );
}
 
export default VideoPage;           

        /* <CommentForm/>
            <CommentList/>
            <RelatedVideos/> */