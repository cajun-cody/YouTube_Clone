import axios from "axios";
import { useState} from 'react';
import useAuth from "../../hooks/useAuth";



//Form to create a new comment to a video
const CommentForm = ({ videoId }) => {

    const [comment, setComment] = useState();
    const [user, token] = useAuth();

    async function postComment(newComment) {
        let response = await axios.post(`http://127.0.0.1:8000/api/comments/`,
        newComment,
        {headers: {Authorization: "Bearer " + token}});
        console.log(response)
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            video_id: videoId,
            text: comment,
            likes: 0,
            dislikes: 0
        };
        postComment(newComment);

    }

    return ( 
        <form onSubmit={handleSubmit} className='comment-form'>
            <label><h3>Comment</h3></label>
            <div>
                <input value={comment} onChange={(event) => setComment(event.target.value)}/>
                <button type='submit' className="comment-btn">Post Comment</button>
            </div>
        </form>
     );
}
 
export default CommentForm;