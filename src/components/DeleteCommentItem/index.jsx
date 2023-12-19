import React from 'react'

const DeleteCommentItem = ({ id , setComment, comment }) => {


    async function deleteComment (id) {
        await fetch(`http://localhost:3000/comments/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })

        setComment(comment.filter(c => c.ThreadID !== id))

        window.location.reload()

    }

  return (
    <button onClick={() => deleteComment(id)}>Delete comment</button>
  )
}

export default DeleteCommentItem
