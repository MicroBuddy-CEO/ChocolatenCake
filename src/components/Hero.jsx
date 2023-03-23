import React from "react";
import arrow from "../assets/images/icons/arrow.svg";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-bg">
          <div className="hero-content">
            <h2
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              Author's Delicious Sweets <span>and Chocolate</span>
            </h2>
            <p
              className="font-inter"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1200"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <button
              className="font-inter"
              data-aos="zoom-in"
              data-aos-delay="900"
              data-aos-duration="1500"
            >
              read more
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
