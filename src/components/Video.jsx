import React from "react";
import Popup from "reactjs-popup";
import playbtn from "../assets/images/video/playbtn.svg";
const Video = () => {
  return (
    <>
      <div className="video-section">
        <div className="">
          <Popup
            trigger={
              <button className="playbtn floating">
                <img src={playbtn} alt="" />
              </button>
            }
            modal
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">
                  {" "}
                  <iframe
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/f5tvQ1YsrDE?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </>
  );
};

export default Video;
