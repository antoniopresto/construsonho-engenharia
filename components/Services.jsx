import React from "react";
import TitleSection from "./generics/TitleSection";
import {Row} from "antd";
import IconCards from "./generics/IconCards";

export default function Services() {
    const valueTitle = {
        text: "O QUE OFERECEMOS",
        title: "Nossos Serviços",
        cor: "black",
    };

    const valueCard = [
        {
            id: "services_00",
            subtitle: "Laudos, avaliações e serviços",
            imgUrl: "/services_00.png",
            description: [
                "Vistorias, laudos técnicos e perícias;",
                "Supervisão e acompanhamento de obras;",
                "Laudo de impacto de vizinhança;",
                "Avaliação e tratamento de patologias nas construções;",
                "Monitoramento e qualificação de solos."
            ]
        },
        {
            id: "services_11",
            subtitle: "Serviços de Empreiteira",
            imgUrl: "/services_11.png",
            description: [
                "Construção de Edificação Empresarial e/ou Residencial;",
                "Reformas em geral;",
                "Manutenção Predial;",
                "Manutenção Industrial;",
                "Instalação e manutenção elétrica;",
                "Instalações hidráulicas, sanitárias e de gás;",
                "Serviços de pintura de edifícios em geral."
            ]
        },
        {
            id: "services_22",
            subtitle: "Projetos de Construção Civil",
            imgUrl: "/services_2.png",
            description: [
                "Projetos executivos;",
                "Projetos estruturais em concreto armado e alvenaria estrutural;",
                "Projetos de estruturas metálicas;",
                "Projetos de instalações hidráulicas;",
                "Projetos de instalações elétricas;",
                "Dentre outros projetos relacionados."
            ]
        },
    ];
    return (
        <section className="bg__container bg__white">
            <div className="container">
                <TitleSection {...valueTitle} />
                <div className="container__wrapper">
                    <Row style={{rowGap: "1rem", columnGap: "1rem"}}>
                        <IconCards {...valueCard[0]} />
                        <IconCards {...valueCard[2]} />
                        <IconCards {...valueCard[1]} />
                    </Row>
                </div>
            </div>
        </section>
    );
}
