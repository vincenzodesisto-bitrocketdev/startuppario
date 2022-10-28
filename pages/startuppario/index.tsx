import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "../../components/Navbar";
import jsonData from "../../json/startuppario.json";

const ViewStartuppario: NextPage = () => {
  const router = useRouter();

  const word = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "Z",
  ];

  return (
    <Container>
      <Head>
        <title>Startuppario</title>
        <meta
          name="description"
          content="Startuppario: Il vocabolario delle startup"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>Startuppario: Il vocabolario delle startup</title>
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
      <Navbar />

      <div>
        {word.map((el, index) => {
          return (
            <>
              <SectionContainer style={{ zIndex: index + 1 }}>
                <Sticky>
                  <div>
                    <SectionLabel>{el}</SectionLabel>
                  </div>
                  <hr />
                </Sticky>
              </SectionContainer>

              <h2>
                {jsonData.map((obj) => {
                  if (obj.sez === el)
                    return (
                      <WrapperTitle
                        onClick={() => router.push(`./startuppario/${obj.id}`)}
                      >
                        {obj.title}
                      </WrapperTitle>
                    );
                })}
              </h2>
            </>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div({});
const SectionLabel = styled.h1({
  margin: 0,
});
const SectionContainer = styled.div({
  fontSize: "2rem",
  fontWeight: 900,
  position: "sticky",
  top: "200px",
});

const Sticky = styled.div({
  fontSize: "2rem",
  fontWeight: "900",
  background: "#3c3c3b",
});

const WrapperTitle = styled.div({
  padding: "0 250px",
  margin: "30px 0",
  cursor: "pointer",
  "&:hover": {
    color: "#ce2c38",
    boxShadow: "5px 5px 5px 0 #ce2c38",
  },
});

export default ViewStartuppario;
