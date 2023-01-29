import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DeleteAllUser = () => {
  const Wrapper = styled.div`
    button {
      border: none;
      color: #333333;
      background: #ddd;
      border-radius: 5px;
      padding: 0.8rem 1rem;
      font-weight: 700;
      cursor: pointer;
    }
  `;

  return (
    <Wrapper>
      <motion.button whileTap={{ scale: 1.1 }}>delete user</motion.button>
    </Wrapper>
  );
};

export default DeleteAllUser;
