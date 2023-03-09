import Reply from "../Reply/Reply";
import axios from "axios";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import './ReplyList';

//Component to display replies to a comment
const ReplyList = ({comment_id}) => {

    const [replies, setReplies] = useState();
    const [user, token] = useAuth();

    async function getAllReplies() {
        let response = await axios.get(`http://127.0.0.1:8000/api/replies/comment_id/${comment_id}/`,
        {headers: {Authorization: "Bearer " + token}});
        setReplies(response.data);
        console.log(response.data)
    }

    useEffect(() => {
        getAllReplies();
    }, [])

    return ( 
        <div className="reply-list">
            {replies&&replies.map( item => <Reply key={item.id} reply={item}/>)}
        </div>
     );
}
 
export default ReplyList;