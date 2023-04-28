import React from "react";
import {Row, Col, Button, Layout} from "antd";
import {Footer} from "antd/lib/layout/layout";
import {
    InstagramOutlined,
    FacebookOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    BankOutlined,
    CameraOutlined,
} from "@ant-design/icons";
import SubtitleSection from "../generics/SubtitleSection";
import Link from "next/link";

export default function Rodape() {
    const valueSubtitle = [
        {id: "0_rodape", text: "Contato"},
        {id: "1_rodape", text: "Links Internos"},
        {id: "2_rodape", text: "Redes Sociais"},
    ];

    return (
        <Layout className="rodape">
            <Footer>
                <div className="container">
                    <Row>
                        <Col flex="0 1 140px" className="rodape_figure">
                            <figure>
                                <img
                                    src="/logo.png"
                                    alt="logotipo empresa construsonho engenharia"
                                    style={{width: "100%"}}
                                />
                            </figure>
                        </Col>
                        <Col flex="1 2 auto">
                            <SubtitleSection {...valueSubtitle[0]} />
                            <div className="others-texts">
                                <p>
                                    <a href="https://goo.gl/maps/auNEbboK8t76N7YE6" target="_blank">
                                        Alameda Mamoré, 911 - 11º andar sala 1106 <br/> Alphaville, Barueri/SP
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:+551141951020" target="_blank">
                                        Tel. (11) 4195-1020
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:+5511950711314" target="_blank">
                                        +55 11 95071-1314
                                    </a>
                                </p>
                            </div>
                        </Col>
                        <Col flex="0 1 150px">
                            <SubtitleSection {...valueSubtitle[2]} />
                            <Button type="text" href="https://www.instagram.com/engenhariaconstrusonhos/"
                                    icon={<InstagramOutlined/>}>
                                Instagram
                            </Button>
                            <Button type="text" href="https://www.facebook.com/engenhariaconstrusonhos-108246148003444"
                                    icon={<FacebookOutlined/>}>
                                Facebook
                            </Button>
                            <Button type="text" href="https://wa.me/5511950711314" icon={<WhatsAppOutlined/>}>
                                WhatsApp
                            </Button>
                        </Col>
                        <Col flex="0 1 150px">
                            <SubtitleSection {...valueSubtitle[1]} />
                            <Button type="text" href="/" icon={<HomeOutlined/>}>
                                Home
                            </Button>
                            <Button type="text" href="/About" icon={<BankOutlined/>}>
                                Sobre
                            </Button>
                            {/*<Button type="text" href="/Gallery" icon={<CameraOutlined/>}>*/}
                            {/*    Galeria*/}
                            {/*</Button>*/}
                        </Col>

                        <Col flex="1 1 auto" align={"center"}>
                            <figure style={{width: "5rem"}} onClick={() => window.scrollTo(0, 0)}>
                                <img
                                    src="/backtop.png"
                                    alt="voltar ao inicio da página"
                                    style={{width: "100%"}}
                                />
                            </figure>
                        </Col>
                    </Row>
                </div>
            </Footer>
            <div className="rodape_name">
              <span className="span-section">
                Engenheiro Civil: Wedson dos Santos - CREA/SP: 5070620780
              </span>
            </div>
        </Layout>
    );
}
