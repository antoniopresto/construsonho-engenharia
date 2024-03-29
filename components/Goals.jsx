import React from "react";
import TitleSection from "./generics/TitleSection";
import {Row} from "antd";
import Cards from "./generics/Cards";

export default function Goals() {
    const valueTitle = {
        text: "meta principal",
        title: "Nossa identidade",
        cor: "black",
    };

    const valueCard = [
        {
            id: "goals_0",
            subtitle: "Missão",
            imgUrl: "url(./goals_00.png)",
            description: ["Gerar a oportunidade da casa própria;", "Chegar nas grandes empresas e empreendimentos;", "Criar oportunidades de empregos;", "Investir em qualificação para todos os nossos colaboradores."],
        },
        {
            id: "goals_1",
            subtitle: "Visão",
            imgUrl: "url(./goals_11.png)",
            description: ["Nos tornar uma grande e renomada Incorporadora;", "Ser uma Empresa referência no ramo da construção civil no nosso país e países vizinhos."],
        },
        {
            id: "goals_2",
            subtitle: "Valores",
            imgUrl: "url(./goals_22.png)",
            description: ["Confiança;", "Excelência;", "Prestação de contas;", "Esforço;", "Sustentabilidade;", "Responsabilidade;", "Compromisso;", "Gratidão."],
        },
    ];

    return (
        <section className="bg__container bg__gray">
            <div className="container">
                <TitleSection {...valueTitle} />
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
