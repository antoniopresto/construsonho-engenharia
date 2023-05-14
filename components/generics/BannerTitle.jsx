import React from "react";
import {Row, Col, Breadcrumb} from "antd";
import Image from 'next/image';
import Link from "next/link";

export default function BannerTitle(props) {
    const {title, breadcrumbName} = props;

    return (
        <section className="bg__container bg__white">
            <div className="container">
                <Row justify="center" align="center">
                    <Col flex="1 1 300px">
                        <p className="title-section">
                            {title}
                        </p>

                        <div className="underline__card"></div>

                        <Breadcrumb style={{padding: "20px"}}>
                            <Breadcrumb.Item>
                                <a href="/">Home</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {breadcrumbName}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col flex="1 1 300px">
                        <figure>
                            <Image
                                src="/img_titles.png"
                                alt="imagem empresa"
                                width={350}
                                height={150}
                            />
                        </figure>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
