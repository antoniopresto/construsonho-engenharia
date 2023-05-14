import React, {useState} from "react";
import {Button, Card, Col, Row} from 'antd';
import Image from "next/image";
import Link from "next/link";

export default function TypesProjects(props) {

    const {filter} = props;

    const projects = [
        {
            title: "Residencial",
            imgUrl: "/residencial_1.png"
        },
        {
            title: "Comercial",
            imgUrl: "/store.png"
        },
        {
            title: "Empresarial",
            imgUrl: "/company.png"
        },
    ];

    //const filterProjects = ['todos', 'residencial', 'comercial', 'empresarial'];

    //const [selectedFilter, useSelectedFilter] = useState(filterProjects[0])

    return (
        <section className="bg__container bg__white">
            <div className="container">
                <div className="container__wrapper">
                    <Row style={{rowGap: "1rem", columnGap: "1rem"}}>
                        {projects.map((items, key) => {
                            return (
                                <Col flex="1 1 200px" key={key}>
                                    <Card
                                        hoverable={false}
                                        cover={
                                            <Image
                                                alt={items.title}
                                                src={items.imgUrl}
                                                height={100}
                                                width={150}
                                            />}
                                        style={{textAlign: "center", paddingTop: "1.5rem", background: "none"}}
                                    >

                                        <p className="span-section container__wrapper__title-card">
                                            {items.title}
                                        </p>

                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>

                    {
                        filter ? null :
                            <div className="container__wrapper__button-projects">
                                <Link href="/Projects">
                                    <Button> CONHEÇA NOSSOS PROJETOS </Button>
                                </Link>
                            </div>
                    }

                </div>
            </div>
        </section>
    );
}