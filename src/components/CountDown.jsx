import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const CountDown = () => {
  const [countUp, setCountUp] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountUp(true)}
      onExit={() => setCountUp(false)}
    >
      <div className="counter-section">
        <div className="container">
          <div className="count-container">
            <div className="count-box">
              <h4>
                {countUp && (
                  <CountUp start={0} end={100} duration={2.75} delay={0.5} />
                )}
              </h4>
              <h3>Pastry shop</h3>
            </div>
            
            <div className="count-box">
              <h4>
                {countUp && (
                  <CountUp start={0} end={500} duration={2.75} delay={0.5} />
                )}
              </h4>
              <h3>Candies Collections</h3>
            </div>
            <div className="count-box">
              <h4>
                {countUp && (
                  <CountUp start={0} end={300} duration={2.75} delay={0.5} />
                )}
              </h4>
              <h3>Years of Experience</h3>
            </div>
            <div className="count-box">
              <h4>
                {countUp && (
                  <CountUp start={0} end={600} duration={2.75} delay={0.5} />
                )}
              </h4>
              <h3>Creative Pastry Chefs</h3>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CountDown;
