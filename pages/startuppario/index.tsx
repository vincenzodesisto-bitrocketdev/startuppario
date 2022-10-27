import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "../../components/Navbar";
import jsonData from "../../json/startuppario.json";

const ViewStartuppario: NextPage = () => {
  let sectionWord = "";
  let isNewSection = false;
  const router = useRouter();

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
        <ul>
          {jsonData.map((el) => {
            if (sectionWord !== el.sez) {
              sectionWord = el.sez;
              isNewSection = true;
            } else isNewSection = false;
            return (
              <div>
                {sectionWord === el.sez && isNewSection && (
                  <div>
                    {/* <StickySection> */}
                    <h1>{el.sez}</h1>
                    <hr />
                    {/* </StickySection> */}
                  </div>
                )}
                <WrapperTitle>
                  <h2 onClick={() => router.push(`./startuppario/${el.id}`)}>
                    {el.title}
                  </h2>
                </WrapperTitle>
              </div>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div({});
const StickySection = styled.div({
  position: "sticky",
  top: 0,
});
const WrapperTitle = styled.div({
  padding: "0 250px",
  margin: "50px 0",
  cursor: "pointer",
  "&:hover": {
    color: "#ce2c38",
    boxShadow: "5px 5px 5px 0 #ce2c38",
  },
});

export default ViewStartuppario;
