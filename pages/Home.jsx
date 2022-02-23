import Banner from "../components/Banner";
import Company from "../components/Company";
import Services from "../components/Services";
import Contact from "../components/several/Contact";
import React from "react";
import Goals from "../components/Goals";
import History from "../components/History";
import Rodape from "../components/several/Rodape";
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";
import Bannertitle from "../components/generics/Bannertitle";
import Navbar from "../components/several/Navbar";
import Topmenu from "../components/several/Topmenu";

export default function Home() {

    return (
        <Layout>
            <Topmenu/>
            <Content>
                <Banner/>
                <Company/>
                <Services/>
                <Contact/>
            </Content>
            <Rodape/>
        </Layout>
    );
}
