import React, { useState } from "react";
import "./OurWork.css";

import imageSrc from "./school.png";

const OurWork = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="work-card-container">
        <div
          className="img-card"
          style={{ backgroundImage: `url(${imageSrc})` }}
          onClick={() => setIsOpen(true)}
        ></div>

        <div className="work-desc">
          <h3 className="work-name">St. George Academy </h3>
          <p className="status">(currently working on it...)</p>
          <p className="work-details">
            We built a clean, responsive school website that showcases the
            institution’s features, facilities, and values. Designed for clarity
            and ease of navigation, it helps prospective students and parents
            explore the school online. While focused on presentation, future
            updates may include interactive features for parent-staff
            communication and engagement.
          </p>
          <p className="work-link">
            <a
              href="https://st-george-academy.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              👉 Click Here
            </a>
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="image-modal" onClick={() => setIsOpen(false)}>
          <img src={imageSrc} alt="School Preview" />
        </div>
      )}
    </>
  );
};

export default OurWork;
