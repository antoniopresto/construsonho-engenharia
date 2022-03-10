import React from "react";
import Bannertitle from "../components/generics/Bannertitle";

export default function Gallery() {
  const valueTitle = {
    title: "Nossa Galeria",
    breadcrumbName: "Galeria"
  };

  return <Bannertitle {...valueTitle} />;
}
