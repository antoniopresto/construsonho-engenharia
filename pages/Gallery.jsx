import React from "react";
import BannerTitle from "../components/generics/BannerTitle";
import Goals from "../components/Goals";
import History from "../components/History";
import Contact from "../components/several/Contact";

export default function Gallery() {
    const valueTitle = {
        title: "Nossa Galeria",
        breadcrumbName: "Galeria"
    };

    return (
        <>
            <BannerTitle {...valueTitle} />
            <Contact/>
        </>
    );
}
