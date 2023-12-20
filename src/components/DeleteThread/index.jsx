import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

const DeleteThread = ({ id, thread, setThread }) => {

// 	const [items, setItems] = useState([]);

// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('items'));
//   if (items) {
//    setItems(items);
//   }
// }, []);
    const { user } = useAuthContext()

    const [email, setEmail] = useState([])
    
    useEffect(() => {

        async function getThread(id){
            const response = await fetch(`http://localhost:3000/threads/${id}`)
            const data = await response.json()
            setEmail(data.Email)
        }
        getThread(id)    
    }, [id])
    
    async function deleteThread(id){

        if (user.email === email){

            await fetch(`http://localhost:3000/threads/${id}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json'}
            })
            
            setThread(thread.filter(c => c._id !== id))
            
        }
    }
        
		return user.email === email ? (
			<button style={{ backgroundColor: 'red', color:'white'}} onClick={() => deleteThread(id)}>Delete thread</button>
		) : null;
    
}

export default DeleteThread
