import React from "react";
import { MdGroups } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import "../Css/Cards.css";
export default function Cards() {
  return (
    <>
      <div className="cards">
        <div className="cards-item-1">
          <div className="card-item">
            <div className="card-head">
              <MdGroups style={{fontSize:"2.5rem",color:"#8064A2"}} />
              People
            </div>
            <div className="card-text">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </div>
            <div className="card-btn">
              <button>Connect</button>
            </div>
          </div>
          <div className="card-item">
            <div className="card-head">
              <IoLocation style={{fontSize:"2.3rem",color:"#77933C"}} />
              Place
            </div>
            <div className="card-text">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </div>
            <div className="card-btn">
              <button>Meet up</button>
            </div>
          </div>
        </div>

        <div className="cards-item-2">
          <div className="card-item">
            <div className="card-head">
              <FaShoppingCart style={{fontSize:"2.2rem",color:"#C0504D"}} />
              Product
            </div>
            <div className="card-text">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </div>
            <div className="card-btn">
              <button>Get it</button>
            </div>
          </div>
          <div className="card-item">
            <div className="card-head">
              <FaCalendarCheck style={{fontSize:"2.2rem",color:"#109DCB"}} />
              Program
            </div>
            <div className="card-text">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </div>
            <div className="card-btn">
              <button>Attend</button>
            </div>
          </div>
        </div>

        <div className="cards-item-last">
          <div className="card-item-last">
            <div className="card-head">
              <IoMdAddCircle 
 style={{fontSize:"2.2rem",color:"#109DCB"}} />
              Add Your Own
            </div>
            <div className="card-text">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page..
            </div>
            <div className="card-btn">
              <button><a href="/addnew">Add new</a></button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
