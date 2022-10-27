import React from "react";
import styled from "@emotion/styled";

export const Navbar = () => {
  return (
    <Wrapper>
      <img src="../assets/rocket.png" />
      <h1 style={{ margin: "0" }}>
        Startuppario, il vocabolario delle startup.
      </h1>
      <h5>
        Tutti i termini chiave che devi sapere per fare bella figura (e buoni
        affari) nel mondo startup.
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  top: 0,
  position: "sticky",
  backgroundColor: "#ce2c38",
  width: "100%",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
