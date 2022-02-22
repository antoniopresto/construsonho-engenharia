import React from "react";
import Titlesection from "./generics/Titlesection";
import { Row, Col } from "antd";
import Cards from "./generics/Cards";

export default function Services() {
  const valueTitle = {
    text: "O QUE OFERECEMOS",
    title: "Nossos Serviços",
    cor: "black",
  };

  const valueCard = [
    {
      id: "services_0",
      subtitulo: "Laudos, avaliações e serviços",
      linkimg: "url(./services_0.png)",
      description:
        "Vistorias, laudos técnicos e perícias; Supervisão e acompanhamento de obras; Laudo de impacto de vizinhança; Avaliação e tratamento de patologias nas construções; Monitoramento e qualiﬁcação de solos",
    },
    {
      id: "services_1",
      subtitulo: "Serviços de Empreiteira",
      linkimg: "url(./services_1.png)",
      description:
        "Construção de Ediﬁcação Empresarial; Construção de Ediﬁcação Residencial; Reformas em geral; Manutenção Predial; Manutenção Industrial; Instalação e manutenção elétrica; Instalações hidráulicas, sanitárias e de gás; Serviços de pintura de edifícios em geral",
    },
    {
      id: "services_2",
      subtitulo: "Projetos de Construção Civil",
      linkimg: "url(./services_2.png)",
      description:
        "Projetos executivos; Projetos estruturais em concreto armado e alvenaria estrutural; Projetos de estruturas metálicas; Projetos de instalações hidráulicas; Projetos de instalações elétricas; Dentre outros projetos relacionados",
    },
  ];
  return (
    <section className="bg__container bg__white">
      <Titlesection {...valueTitle} />
      <div className="container__wrapper">
        <Row>
          <Cards {...valueCard[0]} />

          <Cards {...valueCard[1]} />

          <Cards {...valueCard[2]} />
        </Row>
      </div>
    </section>
  );
}
