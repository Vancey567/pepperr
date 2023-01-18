import React from 'react'
import './RequestDemoCount.css';

const RequestDemoCount = ({count}) => {
  return (
    <div className="demoCount">
        <span><p>Demo Requests Count: </p></span>
        <span><p>{count}</p></span>
    </div>
  )
}

export default RequestDemoCount