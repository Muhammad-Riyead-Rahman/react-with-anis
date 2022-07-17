import React, { memo } from 'react'

const Message = ({numberOfMessage}) => {
  console.log("Message Rendering")
  return (
    <div>
      <p>send {numberOfMessage} messages</p>
    </div>
  )
}

export default memo(Message)