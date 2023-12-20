import React from 'react'

const DeleteThread = () => {

    async function deleteThread(id){
        await fetch(`https://localhost:3000/threads/${id}`), {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        }
    }

  return (
    <div>DeleteThread</div>
  )
}

export default DeleteThread
