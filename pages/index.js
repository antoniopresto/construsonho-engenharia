import React from "react";
import Head from "next/head";
import Home from "./Home";
import App from "next/app";

export default function Index() {
    return (
        <>
            <Head>
                <title>Construsonho Engenharia</title>
            </Head>

            <App Component={Home}/>
        </>
    );
}
