import React, { useState } from "react";

function Comment({comment, onDelete}) {
    const [likes, setLikes] = useState(0)
    const [poops, setPoops] = useState(0)

    function addLikes() {
        setLikes(likes => likes + 1)
    }

    function addPoops() {
        setPoops(poops => poops + 1)
    }

    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment} <button onClick={(e)=>onDelete(comment.id)}>X</button> </p> 
            <button onClick={addLikes}>{likes} ❤️ </button>
            <button onClick={addPoops}>{poops} 💩 </button>
        </div>
    )
}

export default Comment