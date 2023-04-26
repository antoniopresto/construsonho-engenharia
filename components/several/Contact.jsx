import React from "react";
import {Button, Col, Form, Input, Row, Select} from "antd";
import TitleSection from "../generics/TitleSection";

const {Option} = Select;

export default function Contact() {
    const [form] = Form.useForm();

    const valueTitle = {
        text: "CONTATE NOS",
        title: "Entre Em Contato",
        cor: "white",
    };

    const onFinish = (values) => {
        //console.log('Success:', values);
        encodeValues(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function encodeValues(values) {
        const message = `Olá, sou ${values.name}, e gostaria de saber mais sobre ${values.assunto}. `;
        const str = [message, values.mensagem].filter(Boolean).join('\n');
        const link = `https://wa.me/5511950711314/?text=${str}`;

        return window.open(link);
    }

    return (
        <section className="bg__container bg__black">
            <div className="container">
                <TitleSection {...valueTitle} />
                <div className="container__wrapper">
                    <Row>
                        <Col flex="1 1 250px">
                            <Form
                                form={form}
                                layout={"vertical"}
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name={"name"}
                                    label={<label style={{color: "white"}}>Nome</label>}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor digite seu nome!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                {/*<Form.Item*/}
                                {/*    name={"email"}*/}
                                {/*    label={<label style={{color: "white"}}>E-mail</label>}*/}
                                {/*    rules={[*/}
                                {/*        {*/}
                                {/*            type: "email",*/}
                                {/*            message: 'Digite um e-mail válido!',*/}
                                {/*        },*/}
                                {/*    ]}*/}
                                {/*>*/}
                                {/*    <Input placeholder="seu_email@dominio.com"/>*/}
                                {/*</Form.Item>*/}
                                <Form.Item
                                    name={"assunto"}
                                    label={<label style={{color: "white"}}>Assunto</label>}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor, selecione um assunto!',
                                        },
                                    ]}
                                >
                                    <Select placeholder="Selecione um assunto" allowClear>
                                        <Option value="Projetos de Construção Civil">Projetos de Construção
                                            Civil</Option>
                                        <Option value="Serviços de Empreiteira">Serviços de Empreiteira</Option>
                                        <Option value="Laudos, avaliações e serviços">
                                            Laudos, avaliações e serviços
                                        </Option>
                                        <Option value="Outros Assuntos">Outros Assuntos</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name={"mensagem"}
                                    label={<label style={{color: "white"}}>Mensagem</label>}
                                >
                                    <Input.TextArea autoSize={{
                                        minRows: 3,
                                        maxRows: 5,
                                    }} showCount maxLength={50}/>
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                    >
                                        ENVIAR VIA WHATSAPP
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col flex="1 1 250px">
                            <figure>
                                <img
                                    src="./contact.png"
                                    alt="imagem de contato"
                                    style={{width: "100%"}}
                                />
                            </figure>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}
