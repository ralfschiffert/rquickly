import React, { Component } from 'react'

const DisplayLine = (props) => {

  if (0 === props.timeLeft) {
    document.getElementById('end-of-time').play()
  }

  if (null == props.timeLeft || props.timeLeft === 0) {
    return <div></div>
  } else {
    return (
      <div>
        <h2> Time left {props.timeLeft} s</h2>
      </div>

    )
  }
}

export default DisplayLine