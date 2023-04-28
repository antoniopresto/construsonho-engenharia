import React from "react";
import TitleSection from "./generics/TitleSection";
import {Row, Col} from "antd";

export default function History() {
    const valueTitle = {
        text: "SOBRE NÓS",
        title: "Nossa História",
        cor: "black",
    };
    return (
        <section className="bg__container bg__white">
            <div className="container">
                <TitleSection {...valueTitle} />
                <div className="container__wrapper">
                    <Row>
                        <Col flex="1 1 220px">
                            <p className="others-texts">
                                A Construsonho Engenharia surgiu com o principal objetivo de
                                proporcionar uma enorme satisfação para seus clientes,
                                compreendendo suas necessidades e fornecendo-lhes seerviços que
                                vão ao encontro dessas necessidades. Por isso, contamos com uma
                                equipe altamente qualificada e competente, bem como os métodos e
                                tecnologias mais recenter. Somos uma empresa prestadora de
                                serviços na área da construção civil, que pretende ser reconhecida
                                pela sua solidez e competencia, bem como por todos os nossos
                                clientes, colaboradores e parceiros. <br/> A nossa vontade de
                                crescer faz com que nos desafiemos com entusiasmo e determinação a
                                cada projeto que nos propomos a realizar.
                            </p>
                        </Col>
                        <Col flex="1 1 220px">
                            <p className="others-texts">
                                Com atuação há alguns anos de seu idealizador na área, um jovem
                                cheio de sonhos objetivos começamos a nos desenvolver e nos
                                tornamos uma empresa, com pretensão de chegar cada vez mais longe.
                                Nossa base é nos preparar para os desafios e opotunidades que
                                surgirão e nos empenhar dando sempre nosso melhor, por isso
                                qualificamos e valorizamos ao máximo nossos colaboradores assim
                                como todos aqueles que fazer parte do nosso negócio, como clientes
                                e parceiros, também criando uma cultura coltada a preservação do
                                meio ambiente evitando desperdicios tracando assim novos planos de
                                ação. Por isso buscamos grandes parcerias e novos conhecimentos
                                para nos aprimorar cada vez mais e chegar no mail alto nível de
                                excelencia. <br/> E com muita perseverança, humildade e
                                responsabilidade estamos conseguindo alcançar nossos objetivos.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}
