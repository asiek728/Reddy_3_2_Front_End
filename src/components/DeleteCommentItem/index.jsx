import React from 'react'
import { useAuthContext } from "../../hooks/useAuthContext"

const DeleteCommentItem = ({ id , setComment, comment }) => {

  const { user } = useAuthContext()

    async function deleteComment (id) {
        await fetch(`http://localhost:3000/comments/${id}`, {
            method: "DELETE",
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}` 
            }
        })

        setComment(comment.filter(c => c.ThreadID !== id))

        window.location.reload()

    }

  return (
    <button onClick={() => deleteComment(id)}>Delete comment</button>
  )
}

export default DeleteCommentItem
