import React from 'react';
import './Card.css'

const Card = ({feature}) => {
  return (
    <div className="card-container" style={feature.name === 'feature' ? {height: '200px'} : {height: '170px'}}>
        <div className="icon">{<feature.icon />}</div>
        <h3 className="title">{feature.title}</h3>
        <div className="description">{feature.body}</div>
    </div>
  )
}

export default Card