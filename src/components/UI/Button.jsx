import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const Button = styled.button`
    color: ${(props) =>
      props.children === "sign out"
        ? "blue"
        : props.children === "sign in"
        ? "orangered"
        : "black"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  return (
    <>
      <Button onClick={props.handler}>{props.children}</Button>
    </>
  );
};

export default Button;
