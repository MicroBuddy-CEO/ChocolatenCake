import React from "react";
import ReactTyped from "react-typed";
import missionimg from "../assets/images/mission.png";

const Ourmission = () => {
  return (
    //---------- our mission section ---------
    <div className="ourmission-setion">
      {/*----- section image ------ */}
      <div className="mission-img">
        <img src={missionimg} alt="" />
      </div>

      {/*------------ section content ------- */}
      <div className="mission-content">
        <div className="content-inner">
          <h5 className="font-inter">Our Mission</h5>

          <h2>
            <ReactTyped
              strings={[
                "Making chocolates is an art that we have perfected over the yearsto make our customers happy",
              ]}
              typeSpeed={40}
            />
          </h2>
          <div className="author">
            <h4>Signature Name</h4>
            <p>PASTRY CHEF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourmission;
