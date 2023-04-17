import React, { useState } from "react";

function Votes({video}) {
    const [upVotes, setUpVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

    function addVotes() {
        setUpVotes(upVotes => upVotes + 1)
    }

    function minusVotes() {
        setDownVotes(downVotes => downVotes + 1)
    }

    return (
        <div>
           <button onClick={addVotes}>{upVotes} 👍</button>
           <button onClick={minusVotes}>{downVotes} 👎</button>
        </div>
        
    )
}

export default Votes