import React from "react";
import author from "../assets/images/testimonials/user.png";
const Testimonials = () => {
  return (
    //--------- testimonial section*---------
    <div className="testimonial-section">
      <div className="container">
        {/*---------- section title ------ */}
        <div className="testimonial-title">
          <h5>TESTIMONIALS</h5>
          <h2>What our Buyers Say</h2>
        </div>
        {/*----------- section content ---------- */}
        <div className="testimonial-content">
          <div className="testimonial-content-wrapper">
            <div className="testimonial-quote">
              <p>
                Morbi viverra volutpat ex, id pellentesque felis volutpat eu.
                Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum.
                Integer euismod elit vel nibh commodo, at consequat nisl
                rhoncus. Etiam mattis.
              </p>
            </div>
            <div className="testimonial-author">
              <div className="testi-author-img">
                <img src={author} alt="" />
              </div>
              <div className="testi-author-title">
                <h4>name</h4>
                <p>customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
