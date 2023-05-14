import React from "react";
import { Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { Space } from "../Space";

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 500px;
  }
`;

const Item = styled.div`
  width: calc(30% - 3px);

  @media screen and (max-width: 767px) {
    min-width: 28vw;
  }

  .Item__image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    padding: 10px;
    padding-top: 45px;
    width: 90%;
    display: block;
    margin: auto;
    @media screen and (min-width: 768px) {
      padding-top: 50px;
    }
  }

  .Item__title {
    width: 100%;
    text-align: center;
    display: block;
    margin-top: 10px;
  }
`;

const projects = [
  {
    title: "Residencial",
    imgUrl: "/residencial_1.png",
  },
  {
    title: "Comercial",
    imgUrl: "/store.png",
  },
  {
    title: "Empresarial",
    imgUrl: "/company.png",
  },
];

export default function TypesProjects(props) {
  const { filter } = props;

  return (
    <section className="bg__white flex">
      <div className="container">
        <Space />
        <Space />

        <Wrapper className={"flex between"}>
          {projects.map((item, key) => {
            return (
              <Item key={key}>
                <span
                  className={"Item__image"}
                  style={{ backgroundImage: `url("${item.imgUrl}");` }}
                />

                <span className={"Item__title"}>{item.title}</span>
              </Item>
            );
          })}
        </Wrapper>

        <Space />

        {filter ? null : (
          <div className="container__wrapper__button-projects">
            <Link href="/Projects">
              <Button> CONHEÇA NOSSOS PROJETOS </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
