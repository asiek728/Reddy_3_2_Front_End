import React, {useState} from 'react'

const CheckDelete = ({deleting, setDeleting, destroyStack}) => {
    function changeDeleting(e){
        setDeleting(!deleting)
      }
  return (
    <>
        <div>Are you sure you want to delete this stack?</div>
        <button onClick={destroyStack}>delete</button>
        <button onClick={changeDeleting}>cancel</button>
    </>
  )
}

export default CheckDelete
