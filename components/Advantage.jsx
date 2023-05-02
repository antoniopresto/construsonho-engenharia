import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "antd";
import TitleSection from "./generics/TitleSection";
import DescriptionCards from "./generics/DescriptionCards";
import {useWidth} from "./hooks/useWidth";

export default function Advantage() {
    const widthSize = useWidth();
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(widthSize.width < 541)
        console.log(isMobile, widthSize.width)
    }, [widthSize.width])

    const valueTitle = {
        text: "vantagens em contratar nossa empresa",
        title: "Nosso diferencial",
        cor: "black",
    };

    const description = [
        "Garantia de 5 anos em todos os serviços prestados;",
        "Atendimento personalizado e transparente;",
        "Experiência e comprometimento pela qualidade;",
        "Preços justos e condições especiais;",
        "Soluções personalizadas de acordo com as necessidades de cada cliente;",
        "Contamos com uma equipe de profissionais altamente comprometidos e equipados.",
        "Estamos comprometidos com nossa Missão, Visão e Valores;",
    ]

    return (
        <section className="bg__container bg__gray">
            <div className="container">
                <TitleSection {...valueTitle} />
                <div className="container__wrapper">
                    <Row>
                        <Col flex="1 1 200px" className="others-texts">
                            <div className="container__wrapper__advantage-image">
                                <figure>
                                    {
                                        isMobile ?
                                            <img
                                                src="/ceo_1.png"
                                                alt="logotipo empresa"
                                                style={{
                                                    width: "90%"
                                                }}
                                            />
                                            :
                                            <img
                                                src="/ceo_2.png"
                                                alt="logotipo empresa"
                                                style={{
                                                    width: "70%"
                                                }}
                                            />
                                    }
                                </figure>
                                <h5>
                                    <span>Wedson dos Santos</span>
                                    <br/>
                                    CEO e Engenheiro Civil
                                    <br/>
                                    CREA/SP: 5070620780
                                </h5>
                            </div>
                        </Col>

                        <Col flex="1 1 300px" className="others-texts">
                            <div className="container__wrapper__advantage-text">
                                <h2 className="span-section" style={{textAlign: "center"}}>
                                    Realizar e construir sonhos!
                                </h2>
                                <div className="others-texts icon-cards_description">
                                    <DescriptionCards description={description}/>
                                </div>
                                <h3 className="span-section" style={{textAlign: "center"}}>
                                    Construção, Reformas e Manutenção
                                </h3>
                                <p>
                                    Estamos prontos para atender as suas necessidades com
                                    qualidade, agilidade e preços justos. Faça um orçamento sem compromisso!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}
