import React from "react";
import twitter from "../assets/images/icons/twitter.svg";
import fb from "../assets/images/icons/fb.svg";
import ins from "../assets/images/icons/ins.svg";
import yt from "../assets/images/icons/yt.svg";
import phone from "../assets/images/icons/phone.svg";
import location from "../assets/images/icons/location.svg";
import email from "../assets/images/icons/email.svg";
import blog1 from "../assets/images/footer/blog1.png";
import blog2 from "../assets/images/footer/blog2.png";
const Footer = () => {
  return (
    //---------- footer section -------
    <footer className="footer-section">
      <div className="container">
        <div className="footer-container">
          {/*----- footer about -------- */}
          <div
            className="footer-about"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <h3 className="font-inter">logo</h3>
            <p className="font-inter">
              Etiam consequat sem ullamcorper, euismod metus sit amet, tristique
              justo. Vestibulum mattis, nisi ut.
            </p>
            <ul className="footer-social">
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={fb} alt="" />
              </li>
              <li>
                <img src={ins} alt="" />
              </li>
              <li>
                <img src={yt} alt="" />
              </li>
            </ul>
          </div>

          {/*--------- footer explore -------- */}
          <div
            className="footer-explore"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h3>Explore</h3>
            {/*--- phone  -----*/}
            <div className="exp-item">
              <img src={phone} alt="phone" />
              <div className="exp-item-content">
                <h4 className="font-inter">phone :</h4>
                <p className="font-inter">+28472398472</p>
              </div>
            </div>
            {/*--- location  -----*/}
            <div className="exp-item">
              <img src={location} alt="phone" />
              <div className="exp-item-content">
                <h4 className="font-inter">OUR LOCATION :</h4>
                <p className="font-inter">Banasree, Rampura, Dhaka</p>
              </div>
            </div>
            {/*--- email  -----*/}
            <div className="exp-item">
              <img src={email} alt="phone" />
              <div className="exp-item-content">
                <h4 className="font-inter">EMAIL :</h4>
                <p className="font-inter">email@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div
            className="footer-post"
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <h3>Latest Post</h3>
            <div className="blog">
              <div className="post-img">
                <img src={blog1} alt="blog" />
              </div>
              <div className="blog-content">
                <h3 className="font-inter">CRAFT FOOD</h3>
                <p className="font-inter">Rent Of Equipment for Pastry Shops</p>
              </div>
            </div>
            <div className="blog">
              <div className="post-img">
                <img src={blog2} alt="blog" />
              </div>
              <div className="blog-content">
                <h3 className="font-inter">CRAFT FOOD</h3>
                <p className="font-inter">Rent Of Equipment for Pastry Shops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
