import React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import TopMenu from "../components/several/TopMenu";
import Rodape from "../components/several/Rodape";
import Head from "next/head";
import { GlobalStyles } from "./GlobalStyles";

require("../styles/globals.less");

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Empresa Construsonho Engenharia" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Montserrat:wght@500&family=Open+Sans&family=Playfair+Display:wght@500&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <title>Contrusonho Engenharia</title>
      </Head>

      <Layout>
        <TopMenu />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Rodape />
      </Layout>

      <GlobalStyles />
    </>
  );
}
