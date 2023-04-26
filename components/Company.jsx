import React from "react";
import {Button, Col, Row} from "antd";
import TitleSection from "./generics/TitleSection";

export default function Company() {
    const valueTitle = {
        text: "COMO TRABALHAMOS",
        title: "A Empresa",
        cor: "black",
    };

    return (
        <section className="bg__container bg__gray">
            <div className="container">
                <TitleSection {...valueTitle} />
                <div className="container__wrapper">
                    <Row>
                        <Col flex="1 1 200px">
                            <figure>
                                <img
                                    src="/logotipo.png"
                                    alt="logotipo empresa"
                                    style={{width: "70%"}}
                                />
                            </figure>
                        </Col>

                        <Col flex="1 1 300px" className="outhertexts">
                            <p>
                                Criamos uma solução para o desenvolvimento integral, seguro,
                                eficiente e eficaz de projetos arquitetônicos de investimento
                                imobiliário. Sabemos do alto risco envolvido em um projeto de
                                investimento arquitetônico. É por isso que treinamos nossos
                                profissionais para fornecer suporte contínuo, com base em suas
                                necessidades específicas.
                            </p>
                            <Button type="primary" href="/About">
                                SAIBA MAIS
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}
