import React from 'react';
import {Card, Col} from 'antd';
import DescriptionCards from "./DescriptionCards";

const {Meta} = Card;

export default function IconCards(props) {
    const {subtitle, imgUrl, description, minHeight} = props;

    return (
        <Col flex="1 1 290px">
            <Card
                style={{background: "none", border: "none"}}
                cover={<img alt={subtitle} src={imgUrl} height={200} style={{objectFit: "cover"}}/>}
            >
                <div style={{paddingBottom: "1rem"}}>
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

