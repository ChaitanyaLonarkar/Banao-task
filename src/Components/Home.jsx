import React from "react";
import Navbarr from "./Navbarr";
import Main from "./Main";
import { Card } from "react-bootstrap";
import Cards from "./Cards";



export default function Home() {
  return (
    <>
      <Navbarr />
      <Main/>
      <Cards/>
    </>
  );
}
