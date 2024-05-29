import React from "react";
import "../Css/Adv.css";
import I2 from "../assets/i2.svg";
export default function Adv() {
  return (
    <>
      <div className="adv">
        <div className="a-head">
          <i>
            Your{" "}
            <span
              style={{
                color: "#624e83",
              }}
            >
              Hobby
            </span>{" "}
            , Your{" "}
            <span style={{ color: "rgb(0, 150, 200)" }}>Community...</span>
          </i>
        <button>Get Started</button>
        </div>
        <div className="il">
          <img src={I2} alt="illustration" />
        </div>
      </div>
    </>
  );
}
