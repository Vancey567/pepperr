import React from 'react'
import Logo from '../Logo/Logo'
import {Link} from 'react-router-dom'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import './Footer.css'
import Button from '../Button/Button';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="left-footer">
          <div className="logo">
            <Logo section="footer"/>
          </div>
            <p className='pepper-description left-item'>Pepper is one of the most reliable delivery  platform managment service to automate your network</p>
            <Button value="Get Started" color="#9D0AFF" />
            <div className="social left-item">
                <LinkedInIcon />
                <TwitterIcon />
                <EmailIcon />
            </div>
            <div className="copyright left-item">
              <p>©All rights reserved. <span className='floset'>Floset.</span> Powered by <span className='wf'>Wf</span>.</p>
            </div>
        </div>
        <div className="right-footer">
          <div className="pages main-pages ">
            <p>Pages main</p>
            <ul>
              <Link><li>Home</li></Link>
              <Link><li>Blog</li></Link>
              <Link><li>Blog Template</li></Link>
              <Link><li>Pricing</li></Link>
              <Link><li>Pricing Ecommerce</li></Link>
              <Link><li>About</li></Link>
              <Link><li>Careers</li></Link>
              <Link><li>Careers Template</li></Link>
              <Link><li>Contact</li></Link>
            </ul>
          </div>
          <div className="pages template-pages">
            <p>Template Pages</p>
            <ul>
              <Link><li>Style Guide</li></Link>
              <Link><li>Licenses</li></Link>
              <Link><li>Changelog</li></Link>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer