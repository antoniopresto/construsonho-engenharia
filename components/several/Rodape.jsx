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
import Image from 'next/image';


export default function Rodape() {
    const valueSubtitle = [
        {id: "0_rodape", text: "Contato"},
        {id: "1_rodape", text: "Links Internos"},
        {id: "2_rodape", text: "Redes Sociais"},
    ];

    const year = new Date().getFullYear();

    return (
        <Layout className="rodape">
            <Footer>
                <div className="container">
                    <Row>
                        <Col flex="0 1 140px" className="rodape_figure">
                            <figure>
                                <Image
                                    src="/logo.png"
                                    alt="logotipo empresa construsonho engenharia"
                                    width={450}
                                    height={200}
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
                            <Link href="/">
                                <Button type="text" icon={<HomeOutlined/>}> Home </Button>
                            </Link>
                            <Link href="/About">
                                <Button type="text" icon={<BankOutlined/>}> Sobre </Button>
                            </Link>
                            <Link href="/Projects">
                                <Button type="text" icon={<CameraOutlined/>}> Projetos </Button>
                            </Link>
                        </Col>

                        <Col flex="1 1 auto" align={"center"}>
                            <figure style={{width: "5rem"}} onClick={() => window.scrollTo(0, 0)}>
                                <Image
                                    src="/backtop.png"
                                    alt="voltar ao inicio da página"
                                    width={100}
                                    height={100}
                                />
                            </figure>
                        </Col>
                    </Row>
                </div>
            </Footer>
            <div className="rodape_name">
              <span className="span-section">
                Todos os direitos reservados © {year} - Construsonho Engenharia.
              </span>
            </div>
        </Layout>
    );
}
