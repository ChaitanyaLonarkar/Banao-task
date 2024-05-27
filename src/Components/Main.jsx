import React from "react";
import "../Css/Main.css"
import I1 from "../assets/i1.svg"
import SignIn from "./SignIn";
export default function Main() {
  return (
    <>
      <section className="main">
        <div className="left">
          <div className="l-head">Explore your <span style={{color:"rgba(0, 150, 200)"}}>
          hobby</span> or <span style={{color:"#7F63A1"}}>passion</span></div>
          <div className="l-text">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities… <br /><br/>If you are an expert or a
            seller, you can Add your Listing and promote yourself, your
            students, products, services or events. Hop on your hobbyhorse and
            enjoy the ride.
          </div>
          <div className="l-img">
            <img src={I1} alt="illustration" />
          </div>
        </div>
        <div className="right">
            <SignIn/>
        </div>
      </section>
    </>
  );
}
