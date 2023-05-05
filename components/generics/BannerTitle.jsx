import React from "react";
import {Row, Col, Breadcrumb} from "antd";

export default function BannerTitle(props) {
    const {title, breadcrumbName} = props;

    return (
        <section
            className="bg__container bg__white"
        >
            <div className="container">
                <Row justify={"center"} align={"center"}>
                    <Col flex="1 1 300px">
                        <p
                            className="title-section"
                        >
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
                            <img
                                src="/img_titles.png"
                                alt="imagem empresa"
                                style={{width: "80%"}}
                            />
                        </figure>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
