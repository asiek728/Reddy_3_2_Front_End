import React from 'react'
import { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

const DeleteCommentItem = ({ id , setComment, comment }) => {

  const { user } = useAuthContext()
  const [email, setEmail] = useState([])
  // console.log(id)

    useEffect(() => {

      async function getComment(id){
        const response = await fetch(`http://localhost:3000/comments/${id}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        const data = await response.json()
        // console.log(data)
        setEmail(data[0].Email)
      }
      if (user){
        getComment(id)
      }
    }, [id, user])

    async function deleteComment (id) {
      if(user.email === email){
        await fetch(`http://localhost:3000/comments/${id}`, {
            method: "DELETE",
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}` 
            }
        })

        setComment(comment.filter(c => c.userID !== id))

        window.location.reload()

    }

  }
    return user.email === email ? (
			<button style={{ backgroundColor: 'red', color:'white'}} onClick={() => deleteComment(id)}>Delete comment</button>
		) : null;
}

export default DeleteCommentItem
