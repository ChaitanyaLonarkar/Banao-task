import React from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";
import "../Css/Testimonial.css";
import Profile from "../assets/testimonial.webp";
export default function Testimonial() {
  return (
    <>
      <div className="testi">
        <div className="t-head">
          <RiDoubleQuotesL className="quotes" />
          Testimonial
        </div>
        <div className="t-text">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </div>
        <div className="voice">
          <div className="voicee">
            
            <div ><IoPlayCircleSharp className="play" /></div>
            <div className="hr"></div>
            <div className="profile">
              <img src={Profile} alt="" />
            </div>
          </div>
          <div className="name">
            <div className="profile">
              <img src={Profile} alt="" />
            </div>
            <div className="name-role">
              <p>Shubha Nagarajan</p>
              <p>Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
