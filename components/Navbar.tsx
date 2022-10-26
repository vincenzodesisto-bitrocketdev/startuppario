import styled from "@emotion/styled";
import React from "react";

export const Navbar = () => {
  return (
    <Wrapper>
      <h1>Titolo</h1>
      <h5>Descrizione</h5>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  background-color: #ce2c38;
  width: 100%;
  height: 150px;
`;
