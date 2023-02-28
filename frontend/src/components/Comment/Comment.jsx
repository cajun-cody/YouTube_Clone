import ReplyForm from "../ReplyForm/ReplyForm";
import ReplyList from "../ReplyList/ReplyList";


//Comment to display a comment to a video with any replies to that comment
const Comment = ({}) => {
    return ( 
        <div>
            <ReplyList/>
            <ReplyForm/>
        </div>
     );
}
 
export default Comment;