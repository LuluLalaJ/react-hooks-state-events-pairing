import React from "react";
import Comment from "./Comment";

function CommentsContainer({comments}) {
    console.log(comments)
    const renderComments = comments.map(comment => <Comment key={comment.id} comment={comment}/>)
    return (
        <div>
            {renderComments}
        </div>
    )
}

export default CommentsContainer