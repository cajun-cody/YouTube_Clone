

//Component to display a reply to a comment
const Reply = ({ reply }) => {
    return ( 
        <div>
            <div>
                <h4>{reply.username}: </h4>
                <p>{reply.text}</p>
            </div>
        </div>
     );
}
 
export default Reply;