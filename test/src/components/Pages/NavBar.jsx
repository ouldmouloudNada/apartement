import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import user from "../../assets/user.png";
import Logo from "../../assets/logo.png";
import plus from "../../assets/plus.png";
import hero from "../../assets/hero-bg.png";
import home from "../../assets/home.png";
import location from "../../assets/map-pin.png";
import copy from "../../assets/copy.png";
import card from "../../assets/credit-card.png"
import search from "../../assets/seach.png";
const Navbar = () => {
  return (
    
   <div className="project">
     <div className="nav">
        <nav className="navbar">
      <ul>
        <li>
        <img  className="p" src={Logo} alt="" />
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/vendor">Vendor</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
    <div className="container">
    <div className="sign">
        <img src={user} alt="" />
        <button className="sign-btn">Sign In</button>
    </div>
    <div className="add">
        <img src={plus} alt="" />
        <button className="plus-btn">Add Property</button>
    </div>
    </div>
    </div>
    <div className="bottom">
      <div className="home-img">
        <img src={hero} alt="" />
      </div>
      <div className="title">
        <h1>Easiest way to find <br />a perfect property</h1>
        <p>Utilize online real estate platforms for the simplest path to discovering <br /> the ideal property, with tailored search filters and comprehensive listings at your fingertips.</p>
      </div>
      <div className="boxes">
        <div className="box">
          <img src={home} alt="" />
          <p>For Rent</p>
        </div>
        <div className="box">
          <img src={location} alt="" />
          <span>Location</span>
        </div>
        <div className="box">
          <img src={copy} alt="" />
          <span>Property type</span>
        </div>
        <div className="box">
          <img src={card} alt="" />
          <span>Price</span>
        </div>
        <img className="search" src={search} alt="" />
      </div>
    </div>
   </div>
  );
};
export default Navbar;