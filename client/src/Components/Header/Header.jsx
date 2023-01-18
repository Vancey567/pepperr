import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Detail from '../Detail/Detail';

import hero from '../../images/hero.png';
import './Header.css';

const url = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

const Header = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const readData = async () => {
      try {
        const res = await fetch(`${url}/admin/data`);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    readData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    const id = localStorage.getItem('id');
    const requestOptions = {
      method: "PATCH",
    }
    try {
      const updatedData = await fetch(`${url}/admin/requestDemo/${id}`, requestOptions);
      console.log(updatedData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="header-container">
        <div className="header-action-container">
          <div className="header-action">
            <h1>{data?.heading}</h1>
            <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
            {/* <Button value="Request a demo" color="#8a04c7"/> */}
            <button className="demo-btn" onClick={(e) => handleClick(e)}>Request a demo</button>
          </div>
        </div>
        {/* <Detail /> */}
        <div className="hero">
          <img src={hero} alt="hero" />
        </div>
        <p className="trust">Trusted and loved by the world’s best teams</p>
    </div>
  )
}

export default Header