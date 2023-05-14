import React from 'react';
import {Card, Col} from 'antd';
import DescriptionCards from "./DescriptionCards";
import Image from 'next/image';

export default function IconCards(props) {
    const {subtitle, imgUrl, description} = props;

    return (
        <Col flex="1 1 290px">
            <Card
                style={{background: "none", textAlign: "center"}}
                bordered={false}
                cover={<Image alt={subtitle} src={imgUrl} height={200} width={300} objectFit="cover"/>}
            >
                <div style={{paddingBottom: "1rem", textAlign: "initial"}}>
                    <p className="subtitle-section">{subtitle}</p>
                    <div className="underline__card"/>
                </div>
                <div className="others-texts icon-cards_description">
                    <DescriptionCards description={description}/>
                </div>
            </Card>
        </Col>
    )
};

