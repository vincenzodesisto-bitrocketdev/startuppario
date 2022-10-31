import React from "react";
import styled from "@emotion/styled";
import iconRocket from "../assets/rocket.png";
import Image from "next/image";
import { PoweredBy } from "./PoweredBy";

export const Navbar = () => {
  return (
    <Wrapper>
      <Image src={iconRocket} alt="Rocket" width={70} height={150} />
      <h1 style={{ margin: "0" }}>
        Startuppario, il vocabolario delle startup.
      </h1>
      <div>
        <h2>
          Tutti i termini chiave che devi sapere per fare bella figura (e buoni
          affari) nel mondo startup.
        </h2>
      </div>
      <PoweredBy />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  zIndex: 999,
  top: 0,
  position: "sticky",
  backgroundColor: "#b82335",
  width: "100%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});
