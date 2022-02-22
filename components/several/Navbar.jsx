import React from "react";
import { Menu, Row, Col } from "antd";
import Link from "next/link";
import { Header } from "antd/lib/layout/layout";

export default function Navbar() {
  const [useLink, setLink] = React.useState("home");
  return (
    <Header>
      <Row
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "#fff",
        }}
      >
        <Col flex={2}>
          <div
            className="logo"
            style={{
              float: "left",
              width: "250px",
            }}
          >
            <a href="/">
              <img
                src="/logotitulo.png"
                alt="logotipo empresa"
                style={{ width: "100%" }}
              />
            </a>
          </div>
        </Col>
        <Col flex={3}>
          <Menu
            onClick={setLink}
            selectedKeys={[useLink]}
            mode="horizontal"
            style={{ lineHeight: "64px", fontFamily: "'Merriweather', serif" }}
          >
            <Menu.Item key="home">
              <Link href="/"> Home </Link>
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
