import React from "react";
import BannerTitle from "../components/generics/BannerTitle";
import Goal from "../components/Goal";
import Contact from "../components/several/Contact";
import History from "../components/History";

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
            <Contact/>
        </>
    );
}
