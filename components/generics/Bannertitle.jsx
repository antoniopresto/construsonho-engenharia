import React from "react";
import {Row, Col, Breadcrumb} from "antd";

export default function Bannertitle(props) {
    const {title, breadcrumbName} = props;

    return (
        <div
            className="bg__container bg__white"
        >
            <Row justify={"center"} align={"center"}>
                <Col flex="1 1 300px">
                    <p
                        className="titlesection"
                    >
                        {title}
                    </p>

                    <div className="underlaine__card"></div>

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
                            src="./img_titles.png"
                            alt="imagem empresa"
                            style={{width: "80%"}}
                        />
                    </figure>
                </Col>
            </Row>
        </div>
    );
}
