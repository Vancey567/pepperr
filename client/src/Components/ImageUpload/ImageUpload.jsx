import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

import './ImageUpload.css';

const url = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const ImageUpload = ({imageData}) => {
  // console.log({imageData});
  console.log(url + imageData);
  const [image, setImage] = useState(imageData);

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  }

  // useEffect(() => {
  //   console.log("Uploaded")
  // }, [image])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("id");

    // fetch(`${url}/admin/image/${id}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ image }),
    // })

    try {
      const res = await fetch(`${url}/admin/image/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      })

      const data = await res.json();
      console.log(data.doc.image)
      setImage(data.doc.image);
    } catch (error) {
      console.log(error);
    }
    // .then((data) => {
    //   console.log(data)
    //   setImage(data.doc.image);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

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
      <img src={`${url+image}`} alt="logo" />
    </div>
  );
};

export default ImageUpload;
