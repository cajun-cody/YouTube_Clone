import Comment from "../Comment/Comment";
import axios from "axios";
import { useState, useEffect } from 'react';

//Component to perform a GET and display a list of comments of a video
const CommentList = ({videoId}) => {

    const [comments, setComments] = useState();

    async function getAllComments() {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`);
        setComments(response.data);
        console.log(response.data)
    }
 
   useEffect(() => {
        getAllComments();
    }, [])    


    return ( 
        <div>
            {comments&&comments.map( item => <Comment key={item.id}comment={item}/>)}
        </div>

     );
}
 
export default CommentList;