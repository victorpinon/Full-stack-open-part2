import React from 'react'

const Notification = ({ message, messageType }) => {
    let messageStyle = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    if (messageType === 'success') {
        messageStyle.color = 'green'
    }
    else if (messageType === 'error') {
        messageStyle.color = 'red'
    }

    if (message === null) {
      return null
    }
  
    return (
      <div style={messageStyle}>
        {message}
      </div>
    )
}

export default Notification