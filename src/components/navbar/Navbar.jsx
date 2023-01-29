import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const Nav = styled.nav`
    text-align: center;
    margin-top: 1rem;
    color: grey;
  `;
  const Title = styled.h1`
    font-size: 3rem;
  `;
  const Links = styled.ul`
    display: flex;
    padding: 2rem;
    margin: 1rem auto;
    border-radius: 5px;
    background: #ddd;
    display: flex;
    width: 50%;
    justify-content: space-between;
    list-style: none;
  `;
  return (
    <React.Fragment>
      <Nav>
        <span>Wellcome to shoaib coding hub</span>
        <Title>Admin Table</Title>
        <span>One Destination for complete web development</span>
        <Links>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Projects</li>
          <li>Code</li>
        </Links>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
