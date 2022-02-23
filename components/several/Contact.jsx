import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import Titlesection from "../generics/Titlesection";

const { Option } = Select;

export default function Contact() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = React.useState("horizontal");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const valueTitle = {
    text: "CONTATE NOS",
    title: "Entre Em Contato",
    cor: "white",
  };

  return (
    <section className="bg__container bg__black">
      <Titlesection {...valueTitle} />
      <div className="container__wrapper">
        <Row>
          <Col flex="1 1 300px">
            <Form
              {...formItemLayout}
              form={form}
              layout={formLayout}
              onValuesChange={onFormLayoutChange}
              name="nest-messages"
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label={<label style={{ color: "white" }}>Nome</label>}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label={<label style={{ color: "white" }}>Email</label>}
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "telefone"]}
                label={<label style={{ color: "white" }}>Telefone</label>}
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                    max: 11,
                    min: 11,
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item
                name={["user", "assunto"]}
                label={<label style={{ color: "white" }}>Assunto</label>}
              >
                <Select placeholder="Selecione um assunto" allowClear>
                  <Option value="civil">Projetos de Construção Civil</Option>
                  <Option value="empreiteira">Serviços de Empreiteira</Option>
                  <Option value="documentacao">
                    Laudos, avaliações e serviços
                  </Option>
                  <Option value="outros">Outros Assuntos</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={["user", "mensagem"]}
                label={<label style={{ color: "white" }}>Mensagem</label>}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item ls={{ offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  //className="login-form-button"
                >
                  ENVIAR
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col flex="1 1 200px">
            <figure>
              <img
                src="./contact.png"
                alt="imagem de contato"
                style={{ width: "100%" }}
              />
            </figure>
          </Col>
        </Row>
      </div>
    </section>
  );
}
