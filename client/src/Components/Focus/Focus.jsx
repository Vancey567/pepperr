import React from 'react'
import './Focus.css'
import Button from '../Button/Button'

const Focus = () => {
  return (
    <div className='focus-container'>
        <div className="focus">
            <div className="focus-details">
                <h1>Focus on the <br />analytics that matter.</h1>
                <p>Grow faster with a website that helps you convert more customers.</p>
                <div className="focus-buttons">
                    <Button value="Get started now" color="#9D0AFF"/>
                    <Button value="Compare plans" color="transparent"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Focus