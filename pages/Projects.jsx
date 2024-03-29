import React from "react";
import BannerTitle from "../components/generics/BannerTitle";
import Contact from "../components/several/Contact";
import PhotosGallery from "../components/PhotosGallery";
import TypesProjects from "../components/several/TypesProjects";
import { useDevice } from "../components/hooks/useDevice";

export default function Projects() {
  const { isMobile } = useDevice();

  const valueTitle = {
    title: "Nossos Projetos",
    breadcrumbName: "Projetos",
  };

  return (
    <>
      <BannerTitle {...valueTitle} noImage={isMobile} />
      <TypesProjects filter={true} />
      <PhotosGallery />
      <Contact />
    </>
  );
}
