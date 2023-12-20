import React from 'react'

const CheckDelete = (deleting, setDeleting, destroyStack) => {
    function changeDeleting(){
        setDeleting(!deleting)
        console.log(deleting)
      }
  return (
    <>
        <div>Are you sure you want to delete this stack?</div>
        <button onClick={destroyStack}>delete</button>
        <button onClick={()=>changeDeleting()}>cancel</button>
    </>
  )
}

export default CheckDelete
