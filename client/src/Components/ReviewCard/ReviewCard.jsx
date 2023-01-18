import React from 'react'
import Stars from '../Stars/Stars'
import './ReviewCard.css'

const ReviewCard = ({review}) => {
  return (
    <div className='reviewCard-container'>
        <div className="review">{review?.review}</div>
        <Stars star={review.star}/>
        <div className="reviewer-name">{review.name}</div>
        <div className="designation">{review.designation}</div>
    </div>
  )
}

export default ReviewCard