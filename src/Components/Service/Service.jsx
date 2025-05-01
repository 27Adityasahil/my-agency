import react from "react";
import ServiceCard from './ServiceCard/ServiceCard'
import "./Service.css";
const Service = () => {
  return (
    <section className="service-section " id="service">
      <h4 className="sec-heading">Our Services</h4>
      <p className="service-sub-heading">
        "Helping You Build a Powerful Online Presence"
      </p>
      <div className="service-desc-container">
      <p className="service-desc">
        "We offer a complete range of website services designed to help your
        brand stand out, attract more customers, and drive real results online.
        Whatever your goals, we have the perfect solution ready for you."
      </p>
      <div className="service-image"></div>
      </div>
      <div className="agency-services">
        <ServiceCard />
      </div>
    </section>
  );
};

export default Service;
