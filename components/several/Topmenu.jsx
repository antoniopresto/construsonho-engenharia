import {Menu, Typography, Button, Drawer, Layout, Row, Col} from "antd";
import Image from "next/image";
import logoPic from "./../../public/logotitulo.png";
import {MenuOutlined} from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import {Header} from "antd/lib/layout/layout";

export default function Topmenu() {
    const [useVisible, setVisible] = React.useState(false);
    //const [useCurrent, setCurrent] = React.useState('Home');

    // const handleClick = (e) => {
    //     setCurrent(e.target.value)
    // };

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    //const { current } = useCurrent;

    /* state = {
      current: 'mail',
      visible : false
    };

     showDrawer = () => {
      this.setState({visible:true});
    };

     onClose = () => {
      this.setState({visible:false});
    };

    handleClick = e => {
      console.log('click ', e);
      this.setState({ current: e.key });
    };
  */
    return (
        <Header align="center" className="bg__container bg__white">
            <Row className="container__wrapper navmenu">
                <Col flex="0 1 200px" style={{alignSelf: "center"}}>
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

                <Col flex={2}><>
                    <Button
                        className="menubtn"
                        type="primary"
                        shape="circle"
                        icon={<MenuOutlined/>}
                        onClick={showDrawer}
                    ></Button>
                    <Drawer
                        title={<Image src={logoPic} alt="logotipo empresa" style={{width: "50px"}}/>}
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
                        //onClick={handleClick} current={[useCurrent]}
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
        </Header>
    );
}
