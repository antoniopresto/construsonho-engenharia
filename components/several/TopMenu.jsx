import {Menu, Button, Drawer, Row, Col} from "antd";
import Image from "next/image";
import logoPic from "./../../public/logotitulo.png";
import logoImg from "./../../public/logotitulopq.png";
import {MenuOutlined} from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import {Header} from "antd/lib/layout/layout";
import {useRouter} from "next/router";

export default function TopMenu() {
    const [useVisible, setVisible] = React.useState(false);
    const router = useRouter();

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Header className="nav-menu">
            <div className="container">
                <Row>
                    <Col flex="0 1 200px" style={{top: "10px"}}>
                        <div>
                            <Link href="/">
                                    <Image
                                        src={logoPic}
                                        alt="logotipo empresa"
                                        width={250}
                                        height={50}
                                    />
                            </Link>
                        </div>
                    </Col>

                    <Col flex="1 1 auto" style={{textAlign: "end", bottom: "8px"}}><>
                        <Button
                            className="menu-btn"
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
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                                <Link href="/About">
                                    <a>Sobre</a>
                                </Link>
                                <Link href="/Projects">
                                    <a>Projetos</a>
                                </Link>
                            </div>
                        </Drawer>
                    </>
                        <Menu
                            className="big-menu"
                            mode="horizontal"
                            overflowedIndicator={<MenuOutlined/>}
                            style={{lineHeight: "64px", fontFamily: "Montserrat, sans-serif"}}
                            activeKey={router.pathname}
                        >
                            <Menu.Item key="/">
                                <a href="/">
                                    <span> Home </span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="/About">
                                <a href="/About">
                                    <span> Sobre </span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="/Projects">
                                <a href="/Projects">
                                    <span> Projetos </span>
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Header>
    );
}
