import React from "react";
import Main from "./Main";
import { Card } from "react-bootstrap";
import Cards from "./Cards";
import Testimonial from "./Testimonial";
import Adv from "./Adv";



export default function Home() {
  return (
    <>
      <Main/>
      <Cards/>
      <Testimonial/>
      <Adv/>
    </>
  );
}
