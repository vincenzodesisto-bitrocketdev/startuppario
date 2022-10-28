import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import jsonData from "../../json/startuppario.json";

const ViewIdStartuppario = () => {
  const router = useRouter();
  const { query } = useRouter();

  const checkElement = jsonData.find((el) => el.id.toString() === query.id);

  return (
    <>
      <Head>
        <title>Startuppario {checkElement?.title}</title>
        <meta
          name="description"
          content="Startuppario: Il vocabolario delle startup"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>Startuppario: {checkElement?.title}</title>
        <meta
          content="Startuppario, il vocabolario delle startup. Impara tutti i termini chiave per fare bella figura e buoni affari nel mondo startup"
          name="description"
        />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="canonical"
          href="http://example.ampproject.org/article-metadata.html"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,900"
          rel="stylesheet"
        />
      </Head>
      <button onClick={() => router.push("/")}>Home</button>
      <Container>
        <h2>{checkElement?.title}</h2>
        <Description>{checkElement?.description}</Description>
      </Container>
    </>
  );
};

const Container = styled.div({
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});
const Description = styled.h3({});

export default ViewIdStartuppario;
