import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DeleteAllUser = ({ deleteAllUser, text }) => {
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
      <motion.button onClick={deleteAllUser} whileTap={{ scale: 1.1 }}>
        {text}
      </motion.button>
    </Wrapper>
  );
};

export default DeleteAllUser;
