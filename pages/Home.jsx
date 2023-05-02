import Banner from "../components/Banner";
import Company from "../components/Company";
import Services from "../components/Services";
import Contact from "../components/several/Contact";
import React from "react";
import Advantage from "../components/Advantage";

export default function Home() {

    return (
        <>
            <Banner/>
            <Company/>
            <Services/>
            <Advantage/>
            <Contact/>
        </>
    );
}
