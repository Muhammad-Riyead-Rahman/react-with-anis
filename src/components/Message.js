import React, { memo } from 'react'

const Message = ({numberOfMessage, onHandleIncrement}) => {
  console.log("Message Rendering")
  return (
    <div>
      <p>send {numberOfMessage} messages</p>
      <button onClick={onHandleIncrement}>Increment Message Number</button>
    </div>
  )
}

export default memo(Message)