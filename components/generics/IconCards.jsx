import React from 'react';
import './index.css';
import {Card} from 'antd';

const {Meta} = Card;

export default function IconCards() {
    const valueCard = [
    {
        id: "goals_0",
        subtitulo: "Missão",
        linkimg: "url(./goals_00.png)",
        description: ["Gerar a oportunidade da casa própria;", "Chegar nas grandes empresas e empreendimentos;", "Criar oportunidades de empregos;", "Investir em qualificação para todos os nossos colaboradores."],
    },
    {
        id: "goals_1",
        subtitulo: "Visão",
        linkimg: "url(./goals_11.png)",
        description: ["Nos tornar uma grande e renomada Incorporadora;", "Ser uma Empresa referência no ramo da construção civil no nosso país e países vizinhos."],
    },
    {
        id: "goals_2",
        subtitulo: "Valores",
        linkimg: "url(./goals_22.png)",
        description: ["Confiança;", "Excelência;", "Prestação de contas;", "Esforço;", "Sustentabilidade;", "Responsabilidade;", "Compromisso;", "Gratidão."],
    },
];


    return (
        <Card
            hoverable
            style={{width: 20}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
        >
            <Meta title="Europe Street beat" description="www.instagram.com"/>
        </Card>
    )
};