import React, { useEffect, useState } from "react";
import { reviews } from "../../Data/reviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";

// const Review = () => {
//   return (
//     <div className="reviews-container">
//       <div className="top">
//         {reviews.map((review) => (
//           <ReviewCard review={review} />
//         ))}
//       </div>
//       <div className="bottom">
//         {reviews.map((review) => (
//           <ReviewCard review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Review;

// const Review = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // useEffect(() => {
//   //   const intervalId = setInterval(() => {
//   //     if ((currentIndex + 1) % reviews.length) {
//   //       setCurrentIndex((currentIndex + 1) % reviews.length);
//   //     } else {
//   //       setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
//   //     }
//   //     // if (currentIndex === reviews.length - 3) {
//   //     //   setCurrentIndex(0);
//   //     // } else {
//   //     //   setCurrentIndex(currentIndex + 1);
//   //     // }
//   //   }, 3000);
//   //   return () => clearInterval(intervalId);
//   // }, [currentIndex]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//         setCurrentIndex((currentIndex + 1) % reviews.length);
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex, reviews]);

//   return (
//     <div className="reviews-carousel">
//       <div
//         className="reviews-wrapper"
//         style={{ transform: `translateX(-${currentIndex * 30}%)` }}
//       >
//         {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
//           <ReviewCard review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsData, setReviewsData] = useState([...reviews]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % reviewsData.length);
      const current = reviewsData.splice(currentIndex, 1);
      setReviewsData([...reviewsData, ...current]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, reviewsData]);

  return (
    <div className="reviews-carousel">
      <div
        className="reviews-wrapper"
        style={{ transform: `translateX(-${currentIndex * 40}%)` }}
      >
        {reviewsData.slice(currentIndex, currentIndex + 3).map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
      <div
        className="reviews-wrapper"
        style={{ transform: `translateX(-${currentIndex * 30}%)` }}
      >
        {reviewsData.slice(currentIndex, currentIndex + 3).map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  );
};


// const Review = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [reviewsData, setReviewsData] = useState([...reviews]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const current = reviewsData.splice(currentIndex, 1);
//       setReviewsData([...reviewsData, ...current]);
//       setCurrentIndex((currentIndex + 1) % reviewsData.length);
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex, reviewsData]);

//   return (
//     <div className="reviews-carousel">
//       <div
//         className="reviews-wrapper"
//       >
//         {reviewsData.map((review) => (
//           <ReviewCard review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };


// export default Review;


// const Review = () => {
//     let box = document.querySelector('.reviews-wrapper');

//     const btnpressprev = () => {
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft - width;
//         console.log(width)
//     }

//     const btnpressnext = () => {
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft + width;
//         console.log(width)
//     }
//     return (
//         <div className="reviews-carousel">
//             <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
//             <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
//             <div className="reviews-wrapper">
//               {reviews.map((review) => (
//                 <ReviewCard review={review} />
//               ))}
//             </div>
//         </div>
//     )
// }

export default Review;

