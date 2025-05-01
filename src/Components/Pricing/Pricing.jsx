import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    <>
    <section className="pricing-section" id='Pricing'>
        <h4 className="pricing-sec-heading">Pricing</h4>
        <p className="pricing-desc">"We believe in transparent, flexible pricing. Whether you're a small startup or an established enterprise, we have a plan that works for you. Check out our affordable packages below and let us help you create the perfect website."</p>
        <div className="pricing-card-container">
            <div className="starter">
              <p className="price">Starter Pack - ₹499</p>
              <p className="price-text">(Perfect for individuals and small businesses who need an online presence fast)</p>
              <p className="pack-features">Included Features</p>
              <ul className="feature-list">
                <li className="pack-features-list">🎨 Custom One-Page Website Design</li>
                <li className="pack-features-list">📱 Mobile Responsive Design</li>
                <li className="pack-features-list">⚡ Fast Loading Speed Optimization</li>
                <li className="pack-features-list">🛠️ Basic On-Page SEO Setup</li>
                <li className="pack-features-list">🧩 Contact Form Integration</li>
                <li className="pack-features-list">🔒 SSL Certificate Setup</li>
                <li className="pack-features-list">🖼️ Basic Image Optimization</li>
                <li className="pack-features-list">🕒 Delivery Time: 5–7 Business Days</li>
              </ul>
            </div>
            <div className="business"></div>
            <div className="enterprise"></div>
        </div>
    </section>
    </>
  )
}

export default Pricing