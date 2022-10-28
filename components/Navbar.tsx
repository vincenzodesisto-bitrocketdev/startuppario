import React from "react";
import styled from "@emotion/styled";
import iconRocket from "../assets/rocket.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <Wrapper>
      <Image
        src={iconRocket}
        alt="Picture of the author"
        width={100}
        height={300}
      />
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
  zIndex: 999,
  top: 0,
  position: "sticky",
  backgroundColor: "#ce2c38",
  width: "100%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
