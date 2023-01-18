import React from "react";
import { services } from "../../Data/services";
import Button from "../Button/Button";
import Card from "../Card/Card";

import PersonIcon from "@mui/icons-material/Person";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="read-more">
        <h1>Build a powerful website for your startup.</h1>
        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
        <Button value="Read more" color="#9D0AFF" />
      </div>
      <div className="customer-services">
        <div className="">
          <div className="services-card-container happy-customer">
            <div className="icon">{<PersonIcon />}</div>
            <h3 className="title">7000 Happy Customer</h3>
            <div className="description">
              Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc
              eleifend aliquet nullam nec sit gravida ac
            </div>
          </div>
          <div className="services-card-container support">
            <div className="icon">{<MessageOutlinedIcon />}</div>
            <h3 className="title">24/7 Support</h3>
            <div className="description">
              Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc
              eleifend aliquet nullam nec sit gravida ac
            </div>
          </div>
        </div>
      </div>
        <div className="services-card-container community">
          <div className="icon">{<SendOutlinedIcon />}</div>
          <h3 className="title">Global Community</h3>
          <div className="description">
            Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend
            aliquet nullam nec sit gravida ac
          </div>
        </div>
    </div>
  );
};

export default Services;
