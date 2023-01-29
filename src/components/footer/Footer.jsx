import React from "react";
import Button from "../UI/Button";

const Footer = () => {
  const fHandler = () => {
    alert("footer handler");
  };
  return <div>{/* <Button handler={fHandler}>sign out</Button> */}</div>;
};

export default Footer;
