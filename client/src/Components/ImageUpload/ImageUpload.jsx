import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

import './ImageUpload.css';

const url = process.env.REACT_APP_BASE_URL;

const ImageUpload = ({imageData}) => {
  const [image, setImage] = useState(imageData);
  const [imagePrev, setImagePrev] = useState();
  const [notification, setNotification] = useState('');

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      console.log(reader.result);
      setImage(reader.result);
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("id");

    try {
      const res = await fetch(`${url}/admin/image/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      })

      const data = await res.json();
      setNotification("Image Updated Successfully!!");
      // setImage(data.doc.image);
      setImage("");
      setImagePrev(data.doc.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(notification) {
      setTimeout(() => {
        setNotification(null);
      }, 3000)
    }
  }, [notification])

  return (
    <div className="header-update-container">
      <form onSubmit={handleSubmit}>
        <input
          className="image-input"
          id="image"
          type="file"
          placeholder="."
          onChange={(e) => captureImage(e)}
        />
        {/* <label className="" htmlFor="image">
          Choose a image
        </label> */}
        <Button value="Update" color="#9D0AFF" />
      </form>
      {
        image && <img className="image-preview" src={image || url+image} alt="logo" />
      }

      {
        notification && <div><p>{notification}</p></div>
      }
      
    </div>
  );
};

export default ImageUpload;
