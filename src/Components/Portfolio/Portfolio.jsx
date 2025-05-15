import react from "react";
import "./Portfolio.css";
import OurWork from "./Our-work/OurWork";
const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h4 className="section-heading">Our Work</h4>
      <p className="portfolio-desc">"Here are some of the websites we’ve designed and developed for clients across different industries. Each project is built with purpose, performance, and aesthetics in mind."</p>
      <div className="sample-works">
        <OurWork />
      </div>
    </section>
  );
};

export default Portfolio;
