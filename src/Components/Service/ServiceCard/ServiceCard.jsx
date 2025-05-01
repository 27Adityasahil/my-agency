import React from "react";
import "./ServiceCard.css";

const services = [
  { title: "Custom Website Design", description: "Beautiful, user-friendly websites tailored to your brand." },
  { title: "Responsive Development", description: "Mobile-first, blazing fast performance on all devices." },
  { title: "E-commerce Solutions", description: "Build your online store and start selling fast." },
  { title: "Landing Pages", description: "High-converting landing pages for ads and marketing." },
  { title: "Website Redesign", description: "Refresh your old website to look and perform better." },
  { title: "SEO Optimization", description: "Get found on Google and attract more visitors." },
  { title: "Website Maintenance", description: "Ongoing updates, security, and technical support." },
];

const ServiceCards = () => {
  return (
    <section className="service-cards-section">
      <h2 className="cards-heading">What We Offer</h2>
      <div className="cards-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
