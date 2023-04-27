import React from 'react';
import {Card, Col} from 'antd';
import DescriptionCards from "./DescriptionCards";

const {Meta} = Card;

export default function IconCards(props) {
    const {subtitle, imgUrl, description} = props;

    return (
        <Col flex="1 1 250px">
            <Card
                style={{maxWidth: 270, marginBottom: 10}}
                cover={<img alt={subtitle} src={imgUrl} height={200} style={{objectFit: "cover"}}/>}
            >
                <Meta className="subtitle-section" title={subtitle}/>
                <div className="underline__card"/>
                <div className="outher-texts icon-cards_description">
                    <DescriptionCards description={description}/>
                </div>
            </Card>
        </Col>
    )
};