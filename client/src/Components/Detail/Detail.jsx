import React from 'react'
import './style.Detail.css'

const Detail = () => {
  return (
    <div className="detail-container">
        <div className="left">
            <div className="left-first">left-first</div>
            <div className="left-second">left-second</div>
            <div className="left-third">left-third</div>
        </div>
        <div className="center">
            <div className="center-first">center-first</div>
            <div className="center-second">center-second</div>
        </div>
        <div className="right">
            <div className="right-first">right-first</div>
            <div className="right-second">right-second</div>
        </div>
    </div>
  )
}

export default Detail