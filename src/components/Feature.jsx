import React from "react";
import dp from "../assets/images/feture/download.svg";
import arrow from "../assets/images/feture/arrow.svg";
import featureimg from "../assets/images/feture/feture.png";
import item1 from "../assets/images/feture/item1.svg";
import item2 from "../assets/images/feture/item2.svg";
import item3 from "../assets/images/feture/item3.svg";
const Feature = () => {
  return (
    //------- feature section ----
    <div className="feature-section">
      <div className="container">
        <div className="feature-container">
          {/*--------- feature left side------- */}
          <div className="feature-left">
            <h3
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              Our patisserie produces <span>unique sweets</span> for lovers of
              yummy
            </h3>
            <p
              className="font-inter"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1300"
            >
              Curabitur tortor ante. vestibulum vel lacus id. serng»r malesucxia
              sem. sit arnet tortor augue magna neque
            </p>
            <div
              className="feature-download-btn"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1300"
            >
              <img src={dp} alt="" />
              <span>Download price</span>
            </div>
            <div
              className="readmore"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1300"
            >
              <span className="font-inter">read more</span>
              <img src={arrow} alt="" />
            </div>
          </div>
          {/* feature middle */}
          <div className="feature-middle">
            <div className="feature-img">
              <img
                src={featureimg}
                alt="featire img"
                data-aos="zoom-in"
                data-aos-delay="1500"
                data-aos-duration="2500"
              />
            </div>
          </div>
          {/* feature right */}
          <div className="feature-right">
            <div className="feature-item">
              <div className="item-img">
                <img
                  src={item1}
                  alt=""
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="800"
                />
              </div>
              <div className="item-content">
                <h3
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  data-aos-duration="1500"
                >
                  Natural Organic Product
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="1400"
                  data-aos-duration="1500"
                >
                  Vtvamus vel non mi gravida ultr sed ut turpis.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="item-img">
                <img
                  src={item2}
                  alt=""
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="800"
                />
              </div>
              <div className="item-content">
                <h3
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  data-aos-duration="1500"
                >
                  Packaging Design
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="1400"
                  data-aos-duration="1500"
                >
                  Praesent sit omet fringilla eros. Nunc pulv dui tellus.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="item-img">
                <img
                  src={item3}
                  alt=""
                  data-aos="fade-left"
                  data-aos-delay="1000"
                  data-aos-duration="800"
                />
              </div>
              <div className="item-content">
                <h3
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  data-aos-duration="1500"
                >
                  Best Quality Cocoa{" "}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="1400"
                  data-aos-duration="1500"
                >
                  Cras in laoreet metus. vitae efficitur libero. Nam sit amet
                  orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
