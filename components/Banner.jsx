import React from "react";
import {Row, Col} from "antd";

export default function Banner() {
    return (
        <section className="bg__container bg__white">
            <div className="container">
                <Row>
                    <Col flex="1 1 280px">
                        <span className="span-section">CONSTRUSONHO ENGENHARIA</span>
                        <p className="title-banner">
                            Um Novo <span className="underline">Conceito</span> Em Edificação
                        </p>
                    </Col>
                    <Col
                        flex="2 1 200px"
                        style={{textAlign: "center", alignSelf: "center"}}
                    >
                        <figure>
                            <img
                                src="/banner.png"
                                alt="imagem de banner"
                                style={{width: "70%"}}
                            />
                        </figure>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
