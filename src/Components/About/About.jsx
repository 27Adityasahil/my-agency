import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <h4 className="sec-heading">About US</h4>
      <div className="about-container">
        <p className="about-desc">
          At{" "}
          <span className="style-text">
            {" "}
            <b> ComeOnline</b>
          </span>
          , we specialize in crafting beautiful, high-converting websites
          tailored for every business. With a focus on creativity, performance,
          and support, we help brands shine online and grow faster.
        </p>
        <div className="key-features">
          <p className="features">Key features:</p>
          <ul className="features-list">
            <li className="feature-item">
              🚀 Lightning-Fast Delivery — Get your site live within days, not
              months
            </li>
            <li className="feature-item">
              🎯 Custom-Tailored Solutions — Designed for your unique goals.
            </li>
            <li className="feature-item">
              🤝 End-to-End Support — We stay with you beyond launch.
            </li>
            <li className="feature-item">
              🛡️ SEO & Mobile Optimized — Rank higher and look better
              everywhere.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
