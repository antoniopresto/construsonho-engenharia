import React, {useState} from "react";
import BannerTitle from "../components/generics/BannerTitle";
import Contact from "../components/several/Contact";
import PhotosGallery from "../components/PhotosGallery";
import TypesProjects from "../components/several/TypesProjects";

export default function Projects() {
    const valueTitle = {
        title: "Nossos Projetos",
        breadcrumbName: "Projetos"
    };

    return (
        <>
            <BannerTitle {...valueTitle} />
            <TypesProjects filter={true}/>
            <PhotosGallery/>
            <Contact/>
        </>
    );
}
