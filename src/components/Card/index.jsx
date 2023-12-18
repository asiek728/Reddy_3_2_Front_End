import React, {useState, useEffect} from 'react'
import PassedButtons from '../PassedButtons'
const Card = ({cardIncrement, setCardIncrement}) => {
  useEffect(()=>{

  },[cardIncrement])

  return (
    <>
      <div>Card</div>
      <PassedButtons cardIncrement={cardIncrement} setCardIncrement={setCardIncrement}/>
    </>
  )
}

export default Card
