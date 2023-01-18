import React from "react";

import starImg from "../../images/star.png";

function Stars({ star }) {
  const stars = [];
  for (let i = 0; i < star; i++) {
    stars.push(<img key={i} src={starImg} alt="stars" />);
  }
  return <div className="star">{stars}</div>;
}

export default Stars;
