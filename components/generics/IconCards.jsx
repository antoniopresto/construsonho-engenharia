import React from 'react';
import {Card} from 'antd';

const {Meta} = Card;

export default function IconCards(props) {
    const {subtitle, imgUrl, description} = props;

    return (
        <Card
            hoverable
            style={{width: 20}}
            cover={<img alt={subtitle} src={imgUrl}/>}
        >
            <Meta title={subtitle} description={description}/>
        </Card>
    )
};