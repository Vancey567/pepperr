import React from 'react';
import './Extra.css'

import purple from '../../../images/purple-div.png';
import green from '../../../images/green-div.png';

const Extra = ({heading, color}) => {
  return (
    <div className="extra-description">
        <p className="extra-heading">{heading}</p>
        <p className="extra-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <div className="points">
            <div className="options">
                <span className="options-img">
                    <img src={color === "purple" ? purple : green} alt="div" />
                </span>
                <span className="options-description">Create posts, reels and stories.</span>
            </div>
            <div className="options">
                <span className="options-img">
                    <img src={color === "purple" ? purple : green} alt="div" />
                </span>
                <span className="options-description">Publish your Facebook posts dynamically.</span>
            </div>
            <div className="options">
                <span className="options-img">
                    <img src={color === "purple" ? purple : green} alt="div" />
                </span>
                <span className="options-description">Schedule any Twitter posts.</span>
            </div>
        </div>
    </div>
  )
}

export default Extra