import React, { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import iconRocket from "../assets/rocket.png";

export const Navbar: FC = () => {
  return (
    <Wrapper>
      <ImageSize>
        <Image src={iconRocket} alt="rocket" />
      </ImageSize>
      <Title>Startuppario, il vocabolario delle startup.</Title>
      <Description>
        Tutti i termini chiave che devi sapere per fare bella figura (e buoni
        affari) nel mondo startup.
      </Description>
    </Wrapper>
  );
};

const ImageSize = styled.div({
  width: "80px",
  height: "80px",
  "@media only screen and (max-width:480px)": {
    width: "50px",
    height: "50px",
  },
  "@media only screen and (max-width:840px) and (min-width:481px)": {
    width: "60px",
    height: "60px",
  },
  "@media only screen and (max-width:1024px) and (min-width:840)": {
    width: "70px",
    height: "70px",
  },
});

const Wrapper = styled.div(({ theme }) => ({
  zIndex: 25,
  top: 0,
  position: "sticky",
  backgroundColor: theme.navbar.background,
  maxHeight: "225px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderBottom: theme.navbar.borderBottom,
  color: theme.text,
  "@media only screen and (max-width:480px)": {
    justifyContent: "start",
    padding: "5px 20px 20px 20px",
  },
  "@media only screen and (max-width:840px) and (min-width:481px)": {
    justifyContent: "start",
    padding: "10px 20px 20px 20px",
  },
  "@media only screen and (max-width:1024px) and (min-width:840px)": {
    justifyContent: "start",
    padding: "15px 20px 20px 20px",
  },
}));

const Title = styled.h1({
  margin: "0",
  fontSize: "48px",
  textAlign: "center",
  "@media only screen and (max-width:480px)": {
    fontSize: "23px",
  },
  "@media only screen and (max-width:840px) and (min-width:481px)": {
    fontSize: "30px",
  },
  "@media only screen and (max-width:1024px) and (min-width:840px)": {
    fontSize: "41px",
  },
});

const Description = styled.h2({
  fontWeight: "normal",
  textAlign: "center",
  "@media only screen and (max-width:480px)": {
    fontSize: "16px",
  },
  "@media only screen and (max-width:840px) and (min-width:481px)": {
    fontSize: "20px",
  },
});
