import React from "react";
import Bannertitle from "../components/generics/Bannertitle";
import { Content } from "antd/lib/layout/layout";

export default function Gallery() {
  const valueTitle = {
    title: "Nossa Galeria",
  };
  return <Bannertitle {...valueTitle} />;
}
