import React from "react";
import "./Pricing.css";
import PricingDoc from "./Pricing.pdf"
const Pricing = () => {
  return (
    <>
      <section className="pricing-section" id="Pricing">
        <h4 className="pricing-sec-heading">Pricing</h4>
        <p className="pricing-desc">
          "We believe in transparent, flexible pricing. Whether you're a small
          startup or an established enterprise, we have a plan that works for
          you. Check out our affordable packages below and let us help you
          create the perfect website."
        </p>
        <p className="pricing-notice"><span>Note: - </span>This pricing does not include domain and hosting charges.</p>
        <div className="pricing-card-container">
          
          <div className="starter">
            <p className="price">Starter Pack - ₹499</p>
            <p className="price-text">
              (Perfect for individuals and small businesses who need an online
              presence fast)
            </p>
            <p className="pack-features">Included Features</p>
            <ul className="feature-list">
              <li className="pack-features-list">
                🎨 Custom One-Page Website Design
              </li>
              <li className="pack-features-list">
                📱 Mobile Responsive Design
              </li>
              <li className="pack-features-list">
                ⚡ Fast Loading Speed Optimization
              </li>
              <li className="pack-features-list">🛠️ Basic On-Page SEO Setup</li>
              <li className="pack-features-list">
                🧩 Contact Form Integration
              </li>
              <li className="pack-features-list">🔒 SSL Certificate Setup</li>
              <li className="pack-features-list">
                🖼️ Basic Image Optimization
              </li>
              <li className="pack-features-list">
                🕒 Delivery Time: 5–7 Business Days
              </li>
            </ul>
          </div>
          <div className="business">
            <p className="price">Business Pack – ₹999</p>
            <p className="price-text">
              (Ideal for growing businesses ready to scale their online
              presence)
            </p>
            <p className="pack-features">Included Features</p>
            <ul className="feature-list">
              <li className="pack-features-list">
                🖥️ Custom Multi-Page Website (Up to 5 Pages)
              </li>
              <li className="pack-features-list">
                🎨 Professional Design Tailored to Your Brand
              </li>
              <li className="pack-features-list">📱 Fully Responsive Design</li>
              <li className="pack-features-list">
                ⚡ Performance Optimization
              </li>
              <li className="pack-features-list">🧠 Basic SEO Setup</li>
              <li className="pack-features-list">💬 Contact + Inquiry Forms</li>
              <li className="pack-features-list">
                🔐 SSL Setup + Basic Security Measures
              </li>
              <li className="pack-features-list">
                🕒 Delivery Time: 7–10 Business Days
              </li>
            </ul>
          </div>
          <div className="enterprise">
            <p className="price">Enterprise Pack – ₹1999+</p>
            <p className="price-text">
              (Best for established businesses and serious startups looking for
              a powerful digital presence)
            </p>
            <p className="pack-features">Included Features</p>
            <ul className="feature-list">
              <li className="pack-features-list">
                🖥️ Fully Custom Website (10+ Pages)
              </li>
              <li className="pack-features-list">
                🔍 Advanced SEO Optimization
              </li>
              <li className="pack-features-list">
                🎨 Premium Custom Design + Branding Support
              </li>
              <li className="pack-features-list">
                🛠️ Custom Functionality / API Integration
              </li>
              <li className="pack-features-list">
                📱 Fully Responsive & Cross-Browser Compatible
              </li>
              <li className="pack-features-list">
                🤝 Priority Email & WhatsApp Support
              </li>
              <li className="pack-features-list">🔐 Advanced Security Setup</li>
              <li className="pack-features-list">
                🕒 Delivery Time: 15–20 Business Days
              </li>
            </ul>
          </div>
        </div>
        <p className="see-pricing">
          To know more about pricing:{" "}
          <a href={PricingDoc} target="_blank">
            👉View PDF
          </a>
        </p>
      </section>
    </>
  );
};

export default Pricing;
