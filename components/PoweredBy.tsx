import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import LogoBitRocket from "../assets/logoRocketWhite.png";

export const PoweredBy = () => {
  return (
    <WrapperPoweredBy
      target={"_blank"}
      style={{
        textDecoration: "none",
        color: "whitesmoke",
        margin: "0 5px",
        cursor: "pointer",
      }}
      href="https://www.bitrocket.dev"
    >
      <Container>
        <Label>Powered by BitRocket.dev</Label>
        <Image src={LogoBitRocket} alt="bitRocket" width={30} height={30} />
      </Container>
    </WrapperPoweredBy>
  );
};

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
});
const Label = styled.p({
  margin: "0 5px",
});
const WrapperPoweredBy = styled.a({
  textDecoration: "none",
  color: "whitesmoke",
  margin: "0 5px",
  cursor: "pointer",
});
