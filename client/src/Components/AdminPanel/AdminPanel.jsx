import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import ImageUpload from "../ImageUpload/ImageUpload";
import RequestDemoCount from "../RequestDemoCount/RequestDemoCount";

import './AdminPanel.css';

// const url = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';
const url = process.env.REACT_APP_BASE_URL;

const AdminPanel = () => {
  const [heading, setHeading] = useState("");
  const [imageData, setImageData] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (value) => {
    setHeading(value);
  };

  useEffect(() => {
    const readData = async () => {
      try {
        const res = await fetch(`${url}/admin/data`);
        const data = await res.json();
        localStorage.setItem('id', data._id);
        setHeading(data.heading);
        setImageData(data.image);
        setCount(data.requestDemoCount);
      } catch (err) {
        console.log(err);
      }
    };
    readData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      heading: heading,
      id: localStorage.getItem('id')
    }

    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    
    try {
      const updatedData = await fetch(`${url}/admin/heading`, requestOptions)
      console.log(updatedData);
      setHeading('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-panel-container">
        <RequestDemoCount count={count}/>
      <div className="header-update-container">
        <form onSubmit={handleSubmit}>
            <input
            className="heading-input"
            type="text"
            placeholder="Write Your Heading here"
            onChange={(e) => handleChange(e.target.value)}
            value={heading}
            />
            <Button value="Update" color="#9D0AFF" />
        </form>
        <ImageUpload imageData={imageData}/>
      </div>
    </div>
  );
};

export default AdminPanel;
{/* <ImageUpload image={image} setImage={setImage}/> */}
