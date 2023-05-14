import React from "react";
import BannerTitle from "../components/generics/BannerTitle";
import Goal from "../components/Goal";
import Contact from "../components/several/Contact";
import History from "../components/History";
import Advantage from "../components/Advantage";

export default function About() {
    const valueTitle = {
        title: "A Empresa",
        breadcrumbName: "Sobre"
    };

    return (
        <>
            <BannerTitle {...valueTitle} />
            <Goal/>
            <History/>
            <Advantage/>
            <Contact/>
        </>
    );
}
