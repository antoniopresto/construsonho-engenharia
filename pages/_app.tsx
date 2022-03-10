import React from "react";
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";
import Topmenu from "../components/several/Topmenu";
import Rodape from "../components/several/Rodape";

require("../styles/globals.less");

export default function App({Component, pageProps}) {
    return (
        <>
            <Layout>
                <Topmenu/>
                <Content>
                    <Component {...pageProps} />
                </Content>
                <Rodape/>
            </Layout>
        </>
    );
}
