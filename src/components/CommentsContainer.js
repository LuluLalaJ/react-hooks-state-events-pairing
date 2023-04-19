import React, { useState } from "react";
import Comment from "./Comment";
import SortComment from './SortComment'

function CommentsContainer({comments}) {
    const [displayedComments, setDisplayedComments] = useState(comments)
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('None')

    const renderComments = displayedComments
    .filter(comment => comment.user.toLowerCase().includes(search.toLowerCase()))
    .sort((c1, c2) => {
        if (sortBy === "alphabet") {
            return c1.comment.toLowerCase().localeCompare(c2.comment.toLowerCase())
        } else if (sortBy === "user") {
            return c1.user.toLowerCase().localeCompare(c2.user.toLowerCase())
        }
    })

    //remember render is the last step!!!
    .map(comment => <Comment key={comment.id} comment={comment} onDelete={handleDelete} />)


    function handleDelete(deletedId) {
        const updatedComments = displayedComments.filter(comment => comment.id !== deletedId)
        setDisplayedComments(updatedComments)
    }

    function sortCommentBy(e) {
        setSortBy(e.target.name)
    }

    return (
        <div>
            <label> Search comments by username
                <input onChange={(e)=>setSearch(e.target.value)} placeholder="type username" />
            </label>
            <br />
            <SortComment sortCommentBy={ sortCommentBy }/>
            {renderComments}
        </div>
    )
}

export default CommentsContainer
