import React from "react";
import Bannertitle from "../components/generics/Bannertitle";
import Goals from "../components/Goals";
import Contact from "../components/several/Contact";
import History from "../components/History";

export default function About() {
    const valueTitle = {
        title: "A Empresa",
        breadcrumbName: "Sobre"
    };

    return (
        <>
            <Bannertitle {...valueTitle} />
            <Goals/>
            <History/>
            <Contact/>
        </>
    );
}
