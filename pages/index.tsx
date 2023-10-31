import styled from "@emotion/styled";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import { TWord } from "../declaration/general";
import { letterList } from "../constants/general";
import apiTitleDetail from "./api/apiWordList";

export const getServerSideProps: GetServerSideProps<{
  wordList: TWord[];
}> = async () => {
  const wordList = await apiTitleDetail();

  return { props: { wordList } };
};

const ViewStartuppario = ({
  wordList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <Head>
        <title>Startuppario: Il vocabolario delle startup</title>
      </Head>

      <Navbar />
      <div>
        {letterList.map((letter, index) => (
          <div key={index}>
            <SectionContainer style={{ zIndex: index + 1 }}>
              <WrapperSection>
                <SectionLabel>{letter}</SectionLabel>
                <Divider />
              </WrapperSection>
            </SectionContainer>
            <WrapperTitle>
              {wordList &&
                wordList.map((word: TWord) => {
                  if (word.sez !== letter) return null;

                  const formattedTitle = word.title.replace(/\s/g, "-");
                  return (
                    <Link
                      title={word.title}
                      href={`./${formattedTitle}`}
                      key={`${word.id}-${word.title}`}
                    >
                      <TitleLink href={`./${formattedTitle}`} key={word.id}>
                        {word.title}
                      </TitleLink>
                    </Link>
                  );
                })}
            </WrapperTitle>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div({});
const WrapperSection = styled.div({});

const SectionLabel = styled.h1({
  margin: 0,
  padding: "16px 300px 0 300px",
  fontSize: "35px",
  "@media only screen and (max-width:480px)": {
    padding: "18px 0 0 20px",
    fontSize: "25px",
  },
  "@media only screen and (max-width:840px) and (min-width:481px)": {
    padding: "16px 0 0 90px",
    fontSize: "30px",
  },
  "@media only screen and (max-width:1024px) and (min-width:840px)": {
    padding: "16px 0 0 200px",
    fontSize: "35px",
  },
});
const SectionContainer = styled.section(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 900,
  position: "sticky",
  top: "244px",
  background: theme.field.background,
  "@media only screen and (max-width:480px)": {
    top: "196px",
  },
  "@media only screen and (max-width:623px) and (min-width:481px)": {
    top: "233px",
  },
  "@media only screen and (max-width:840px) and (min-width:624px)": {
    top: "208px",
  },
  "@media only screen and (max-width:1024px) and (min-width:841px)": {
    top: "264px",
  },
}));

const TitleLink = styled.a(({ theme }) => ({
  fontSize: "22px",
  color: theme.text,
  textDecoration: "none",
  paddingLeft: "300px",
  margin: "15px 0",
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    color: theme.home.textHover,
  },
  "@media only screen and (max-width:480px) ": {
    paddingLeft: "20px",
    margin: "20px 0",
    fontSize: "20px",
  },
  "@media only screen and (max-width:840px) and (min-width:481px)": {
    paddingLeft: "100px",
    margin: "20px 0",
    fontSize: "22px",
  },
  "@media only screen and (max-width:1024px) and (min-width:840px)": {
    paddingLeft: "210px",
    margin: "20px 0",
    fontSize: "24px",
  },
}));
const WrapperTitle = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "15px 0",
  "@media only screen and (max-width:1024)": {
    margin: "10px 0",
  },
});
const Divider = styled.hr({
  backgroundColor: "#E1E1E1",
  height: "1px",
  border: "none",
  width: "100%",
});

export default ViewStartuppario;
