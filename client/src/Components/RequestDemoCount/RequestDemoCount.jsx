import React from 'react'
import './RequestDemoCount.css';

const RequestDemoCount = ({count}) => {
  return (
    <div className="demoCount">
        <span><h1>Demo Requests Count: </h1></span>
        <span><h1>{count}</h1></span>
    </div>
  )
}

export default RequestDemoCount