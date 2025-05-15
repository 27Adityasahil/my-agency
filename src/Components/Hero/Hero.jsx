import React from "react";
import "./Hero.css";
import BrochureDoc from "./brochure.pdf";

const Hero = () => {
  return (
    <section className="hero-sec">
      <div className="left-hero">
        <h4 className="heading">
          "Crafting Websites That Convert{" "}
          <span className="style-text"> Visitors </span> Into{" "}
          <span className="style-text">Customers</span>"
        </h4>
        <p className="hero-desc">
          "We help you to build your brand and grow your business with our
          digital marketing services."
        </p>
        <div className="hero-btn">
          <button className="btns">Get a Free Consultation</button>
          <a href={BrochureDoc} className="btns" target="_blank">
            Download Brochure
          </a>
        </div>
      </div>
      <div className="right-hero">
        <div className="hero-img">
          <img
            src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="desktop-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
