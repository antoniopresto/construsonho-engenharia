import React from "react";
import {Menu, Row, Col, Button, Drawer} from "antd";
import Link from "next/link";
import {Header} from "antd/lib/layout/layout";
import Image from "next/image";
import logoPic from "../../public/logotitulo.png";
import {resolveHref} from "next/dist/shared/lib/router/router";

export default function Navbar() {
    //const [useLink, setLink] = React.useState("home");
    const [useVisible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Header className="bg__container bg__white">
            <Row
                style={{
                    position: "fixed",
                    zIndex: 1,
                    width: "100%",
                    backgroundColor: "#fff",
                }}
            >
                <Col flex="0 1 200px">
                    <div
                        className="logo"
                        style={{
                            float: "left",
                            width: "250px",
                        }}
                    >
                        <a href="/Home">
                            <img
                                src="/logotitulo.png"
                                alt="logotipo empresa"
                                style={{width: "80%"}}
                            />
                        </a>
                    </div>
                </Col>
                <>
                    <Button
                        className="menu-btn"
                        type="primary"
                        shape="circle"
                        onClick={showDrawer}
                    ></Button>
                    <Drawer
                        title={<Image src={logoPic} alt="logo"/>}
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

                <Col flex="1 1 200px">
                    <Menu
                        mode="horizontal"
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
        </Header>
    );
}
