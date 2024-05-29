// import React from 'react'
import "../Css/Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>HobbyCue</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Work with Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>How do I</h3>
          <ul>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Add a Listing</a>
            </li>
            <li>
              <a href="#">Claim Listing</a>
            </li>
            <li>
              <a href="#">Post a Query</a>
            </li>
            <li>
              <a href="#">Add a Blog Post</a>
            </li>
            <li>
              <a href="#">Other Queries</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Listing Pages</a>
            </li>
            <li>
              <a href="#">Blog Posts</a>
            </li>
            <li>
              <a href="#">Shop / Store</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Invite Friends</h3>
          <div className="invite-friends">
            <input type="email" placeholder="Email ID" />
            <button>Invite</button>
          </div>
          <h3>Social Media</h3>
          <div className="social-media-icons">
            <a href="#">
              <GrFacebookOption className="faa" />
            </a>

            <a href="#">
              {" "}
              <FaInstagram  className="faa"/>
            </a>

            <a href="#">
              <FaPinterest className="faa" />
            </a>
            <a href="#">
              <FaYoutube  className="faa"/>
            </a>
            <a href="#">
              <AiFillLinkedin className="faa" />
            </a>
            <a href="#">
              <BsTwitterX className="faa" />
            </a>
            {/* <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Purple Cues Private Limited</p>
      </div>
    </footer>
  );
}
