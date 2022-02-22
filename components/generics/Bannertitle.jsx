import React from "react";
import {Row, Col, PageHeader} from "antd";

export default function Bannertitle(props) {
    const {title} = props;
    const routes = [
        {
            path: "index",
            breadcrumbName: "Home",
        },
        {
            path: "about",
            breadcrumbName: "Sobre",
        },
    ];

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
                    <PageHeader
                        breadcrumb={{routes}}
                        //style={{ color: "#F37B20" }}
                    />
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
