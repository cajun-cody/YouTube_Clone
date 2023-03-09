import './Reply.css';

//Component to display a reply to a comment
const Reply = ({ reply }) => {
    return ( 
        <div>
            <div>
                <h4>{reply.user.username} replied: </h4>
                <p className="replies">{reply.text}</p>
            </div>
        </div>
     );
}
 
export default Reply;