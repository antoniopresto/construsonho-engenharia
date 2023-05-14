import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import TopMenu from '../components/several/TopMenu';
import Rodape from '../components/several/Rodape';
import Head from 'next/head';

require('../styles/globals.scss');

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
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#f15929',
                borderRadius: '5px',
              },
            }}
          >
            <Component {...pageProps} />
          </ConfigProvider>
        </Content>
        <Rodape />
      </Layout>
    </>
  );
}
