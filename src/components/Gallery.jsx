import React from "react";
import gallery1 from "../assets/images/gallery/gallery1.png";
import gallery2 from "../assets/images/gallery/gallery2.png";
import gallery3 from "../assets/images/gallery/gallery3.png";
import gallery4 from "../assets/images/gallery/gallery4.png";
import arrow from "../assets/images/gallery/arrow.png";
const Gallery = () => {
  return (
    <div className="gallery-setion">
      {/*--------- Gallery section title ---------- */}
      <div className="gallery-section-title">
        <div
          className="gallery-title-inner"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h4>Gallery</h4>
          <h2>
            "Our pastry chefs create sweets only with creativity and love"
          </h2>
        </div>
      </div>

      {/*---------- gallery content --------- */}
      <div className="container">
        <div className="gallery-container">
          <div
            className="galler-box"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src={gallery1} alt="gallery2" className="floating" />
          </div>
          <div
            className="galler-box"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <img src={gallery2} alt="gallery2" className="floating" />
          </div>
          <div
            className="galler-box"
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <img src={gallery3} alt="gallery2" className="floating" />
          </div>
          <div
            className="galler-box"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            <img src={gallery4} alt="gallery2" className="floating" />
          </div>
        </div>
        {/*---------- gallery button ------- */}
        <div className="gallery-btn">
          <button
            data-aos="zoom-in"
            data-aos-delay="1200"
            data-aos-duration="1000"
          >
            read more{" "}
            <span>
              <img src={arrow} alt="" />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
