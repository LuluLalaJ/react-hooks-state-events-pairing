import React, { useState } from "react";
import Comment from "./Comment";

function CommentsContainer({comments}) {
    const [displayedComments, setDisplayedComments] = useState(comments)
    const [search, setSearch] = useState('')

    const renderComments = displayedComments
    .filter(comment => comment.user.toLowerCase().includes(search.toLowerCase()))
    .map(comment => <Comment key={comment.id} comment={comment} onDelete={handleDelete}/>)


    function handleDelete(deletedId) {
        const updatedComments = displayedComments.filter(comment => comment.id !== deletedId)
        setDisplayedComments(updatedComments)
    }
    
    return (
        <div>
            <label> Search comments by username
                <input onChange={(e)=>setSearch(e.target.value)} placeholder="type username" />
            </label>
            {renderComments}
        </div>
    )
}

export default CommentsContainer