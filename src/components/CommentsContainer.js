import React, { useState } from "react";
import Comment from "./Comment";

function CommentsContainer({comments}) {
    const [displayedComments, setDisplayedComments] = useState(comments)
    // const [username, setUsername] = useState('')
    const renderComments = displayedComments.map(comment => <Comment key={comment.id} comment={comment}/>)

    function handleSearch(username) {
        const filteredComments = comments.filter(comment => comment.user.toLowerCase() === username.toLowerCase())
        setDisplayedComments(filteredComments)
    } // feel iffy about this search

    
    
    return (
        <div>
            <label> Search comments by username
                <input onChange={(e)=>handleSearch(e.target.value)} placeholder="type username"/>
            </label>
            {renderComments}
        </div>
    )
}

export default CommentsContainer