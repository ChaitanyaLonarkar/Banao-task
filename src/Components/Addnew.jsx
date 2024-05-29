import React from "react";
import Navbarr from "./Navbarr";
import { MdGroups } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import "../Css/Addnew.css";
export default function Addnew() {
  return (
    <>
      <div className="adding">
        <div className="cards">
          <div className="cards-item-1">
            <div className="card-item ci">
              <div className="card-head ch">
                <MdGroups className="mg" style={{ fontSize: "2.5rem",  }} />
                People
              </div>
              <div className="card-text">
                An Individual or Organization. Teacher, Professional, Online
                Seller. Company, Business or Association
              </div>
              
            </div>
            <div className="card-item ci">
              <div className="card-head ch">
                <IoLocation className="io" style={{ fontSize: "2.3rem",  }} />
                Place
              </div>
              <div className="card-text">
                An Address. Shop, School, Studio, Performance or Event Venue,
                Sports Arena, Play Area, Campus.
              </div>
            </div>
          </div>

          <div className="cards-item-2">
            <div className="card-item ci">
              <div className="card-head ch">
                <FaShoppingCart  className="fs"
                  style={{ fontSize: "2.2rem",  }}
                />
                Product
              </div>
              <div className="card-text">
                An Item that you can Book, Buy or Rent. Equipment, Instrument or
                Activity Kit. Appointment, Ticket or Voucher.
              </div>
            </div>
            <div className="card-item ci">
              <div className="card-head ch ">
                <FaCalendarCheck className="fc"
                  style={{ fontSize: "2.2rem",  }}
                />
                Program
              </div>
              <div className="card-text">
                An Event with Venue and Schedule. Meetup, Classes, Workshop or
                Webinar. Exhibition, Performance or Competition.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
