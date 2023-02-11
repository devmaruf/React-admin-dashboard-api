import React from "react";
import {Helmet } from "react-helmet-async";

const Head = ({ ...props }) => {
  return (
      <Helmet>
        <title>
          {props.title ? props.title + " | " : null} Deshibazar DashBoard
          Template
        </title>
      </Helmet>
  );
};
export default Head;
