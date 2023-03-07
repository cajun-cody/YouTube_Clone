import ReplyForm from "../ReplyForm/ReplyForm";
import ReplyList from "../ReplyList/ReplyList";


//Comment to display a comment to a video with any replies to that comment
const Comment = ({ comment }) => {
    return ( 
        <div>
            <div>
                <h4>{comment.username}: </h4>
                <p>{comment.text}</p>
            </div>
            <div>
                <ReplyList comment_id = {comment.id}/>
            </div>
            <div>
                <ReplyForm comment_id={comment.id}/>  
            </div>
        </div>
     );
}
 
export default Comment;