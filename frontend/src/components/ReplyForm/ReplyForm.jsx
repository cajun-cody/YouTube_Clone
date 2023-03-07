import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

//Form to create a new reply to a comment
const ReplyForm = ({comment_id}) => {

    const [reply, setReply] = useState();
    const [user, token] = useAuth();
    const refresh = () =>window.location.reload(true);

    async function postReply(newReply) {
        let response = await axios.post(`http://127.0.0.1:8000/api/replies/post_reply/${comment_id}/`,
        newReply,
        {headers: {Authorization: "Bearer " + token}});
        console.log(response)
    }

    function handleSubmit(event){
        event.preventDefault();
        let newReply = {
            text: reply,
        }
        postReply(newReply);
        setReply();
    }

    return ( 
        <form onSubmit={handleSubmit} className='reply-form'>
           <label><h4>Reply</h4></label>
           <div>
            <input value={reply} onChange={(event) => setReply(event.target.value)}/>
            <button type='submit' className="reply-btn" onClick={refresh}>Post Reply</button>
           </div>
        </form>
     );
}
 
export default ReplyForm;