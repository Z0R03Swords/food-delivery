// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="footerContent">
            <div className="footerContentLeft">
                <img className='logo1' src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perspiciatis ipsa labore asperiores maxime praesentium in commodi dignissimos vitae! Consectetur exercitationem provident qui voluptatibus! Ut mollitia autem dolore rerum! Quam.</p>
                <div className="footerSocialIcons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footerContentCenter">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footerContentRigth">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-322-534-546</li>
                    <li>foodieFood@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="copyright">Copyright 2024 Foodie.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
