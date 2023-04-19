import React from "react";

function SortComment({ sortCommentBy }) {
    return(
        <div>
            <button name="alphabet" onClick={sortCommentBy}>Sort comments by alphabet</button>
            <button name="user" onClick={sortCommentBy}>Sort comments by users</button>
            <button name="none" onClick={sortCommentBy}>Unsort</button>
        </div>
    )
}

export default SortComment
