import ReplyForm from "../ReplyForm/ReplyForm";
import ReplyList from "../ReplyList/ReplyList";
import './Comment.css';


//Comment to display a comment to a video with any replies to that comment
const Comment = ({ comment }) => {
    return ( 
        <div>
            <div >
                <h4>{comment.user.username} commented: </h4>
                <p className="comments">{comment.text}</p>
            </div>
            <div>
                <div>
                    <ReplyList comment_id = {comment.id}/>
                </div>
                <div>
                    <ReplyForm comment_id={comment.id}/>
                </div>
            </div>

        </div>
     );
}
 
export default Comment;