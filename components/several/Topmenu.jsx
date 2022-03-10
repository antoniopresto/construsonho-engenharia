import {Menu, Button, Drawer, Row, Col} from "antd";
import Image from "next/image";
import logoPic from "./../../public/logotitulo.png";
import logoImg from "./../../public/logotitulopq.png";
import {MenuOutlined} from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import {Header} from "antd/lib/layout/layout";

export default function Topmenu() {
    const [useVisible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Header className="navmenu">
            <div className="container">
                <Row>
                    <Col flex="0 1 200px" style={{top: "10px"}}>
                        <div>
                            <a href="/">
                                <Image
                                    src={logoPic}
                                    alt="logotipo empresa"
                                    style={{width: "50px"}}
                                />
                            </a>
                        </div>
                    </Col>

                    <Col flex="1 1 auto" style={{textAlign: "end", bottom: "8px"}}><>
                        <Button
                            className="menubtn"
                            type="primary"
                            shape="circle"
                            icon={<MenuOutlined/>}
                            onClick={showDrawer}
                        ></Button>
                        <Drawer
                            title={<Image src={logoImg} alt="logotipo empresa" style={{textAlign: "center"}}/>}
                            placement="right"
                            onClose={onClose}
                            visible={useVisible}
                        >
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <Button type="text" href="/Home">
                                    Home
                                </Button>
                                <Button type="text" href="/About">
                                    Sobre
                                </Button>
                                <Button type="text" href="/Gallery">
                                    Galeria
                                </Button>
                            </div>
                        </Drawer>
                    </>
                        <Menu
                            className="bigmenu"
                            mode="horizontal"
                            overflowedIndicator={<MenuOutlined/>}
                            style={{lineHeight: "64px", fontFamily: "'Merriweather', serif"}}
                        >
                            <Menu.Item key="home">
                                <Link href="/Home"> Home </Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link href="/About"> Sobre </Link>
                            </Menu.Item>
                            <Menu.Item key="gallery">
                                <Link href="/Gallery"> Galeria </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Header>
    );
}
