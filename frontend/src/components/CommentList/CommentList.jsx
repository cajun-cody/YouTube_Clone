import Comment from "../Comment/Comment";
import axios from "axios";
import { useState, useEffect } from 'react';
import './CommentList.css';

//Component to perform a GET and display a list of comments of a video
const CommentList = ({videoId}) => {

    const [comments, setComments] = useState();

    async function getAllComments() {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`);
        setComments(response.data);
        console.log(response.data)
    }
 
    //Added videoId to bring in comments only related to the chosen video. 
   useEffect(() => {
        getAllComments();
    }, [videoId])    


    return ( 
        <div className="comment-list">
            {comments&&comments.map( item => <Comment key={item.id}comment={item}/>)}
        </div>

     );
}
 
export default CommentList;