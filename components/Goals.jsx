import React from "react";
import Titlesection from "./generics/Titlesection";
import {Row} from "antd";
import Cards from "./generics/Cards";
import {Header} from "antd/lib/layout/layout";

export default function Goals() {
    const valueTitle = {
        text: "meta principal",
        title: "Nossa identidade",
        cor: "black",
    };

    const valueCard = [
        {
            id: "goals_0",
            subtitulo: "Missão",
            linkimg: "url(./goals_0.png)",
            description:
                "Gerar a oportunidade da casa própria > Chegar nas grandes empresas e empreendimentos > Criar oportunidades de empregos > Investir em qualificação para nossos colaboradores",
        },
        {
            id: "goals_1",
            subtitulo: "Visão",
            linkimg: "url(./goals_1.png)",
            description:
                "Nos tornar uma grande e renomada Incorporadora > Ser uma Empresa referência no ramo da construção civil no nosso país e países vizinhos",
        },
        {
            id: "goals_2",
            subtitulo: "Valores",
            linkimg: "url(./goals_2.png)",
            description:
                "> Confiança > Excelência > Prestação de contas > Esforço > Sustentabilidade > Responsabilidade > Compromisso > Gratidão",
        },
    ];

    return (
        <section className="bg__container bg__gray">
            <div className="container">
                <Titlesection {...valueTitle} />
                <div className="container__wrapper">
                    <Row>
                        <Cards {...valueCard[0]} />

                        <Cards {...valueCard[1]} />

                        <Cards {...valueCard[2]} />
                    </Row>
                </div>
            </div>
        </section>
    );
}
