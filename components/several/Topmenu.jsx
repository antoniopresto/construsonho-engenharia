import { Menu, Typography, Button, Drawer, Layout, Row, Col } from "antd";
import Image from "next/image";
import logoPic from "./../../public/logotitulo.png";
import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import { Header } from "antd/lib/layout/layout";

export default function Topmenu() {
  const [useLink, setLink] = React.useState("home");
  const [useMenu, setMenu] = React.useState(false);

  //
  // onClose = () => {
  //   this.setState({ visible: false });
  // };
  //
  // handleClick = (e) => {
  //   console.log("click ", e);
  //   this.setState({ current: e.key });
  // };

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: "#fff",
        height: "6em"
      }}
    >
      <Row>
        <Col flex="0 1 100px">
          <div
            className=""
            // style={{
            //   float: "left",
            //   width: "250px",
            //   height: "50px",
            //   margin: "16px 24px 16px 0",
            // }}
          >
            <a href="/">
              <Image
                src={logoPic}
                alt="logotipo empresa"
                style={{ width: "100%" }}
              />
            </a>
          </div>
        </Col>

        <>
          <Button
            className="menubtn"
            type="primary"
            shape="circle"
            onClick={() => setMenu(!useMenu)}
          ></Button>
          <Drawer
            title={<Image src={logoPic} alt="logo" />}
            placement="right"
            onClick={() => setMenu(!useMenu)}
            visible={useMenu}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button type="text" href="/index">
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
            className="bigmenu"
            onClick={setLink}
            selectedKeys={[useLink]}
            mode="horizontal"
            overflowedIndicator={<MenuOutlined />}
            style={{ lineHeight: "64px", fontFamily: "'Merriweather', serif" }}
          >
            <Menu.Item key="home">
              <Link href="/index"> Home </Link>
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
