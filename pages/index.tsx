import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Container>
      <Head>
        <title>BitRocket NextJS</title>
        <meta name="description" content="BitRocket NextJS" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>BitRocket NextJS</title>
        <meta content="BitRocket with NextJS project" name="description" />
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

      <div>
        Home, guarda lo{" "}
        <button onClick={() => router.push("./startuppario")}>
          Startuppario
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div({});

export default Home;
