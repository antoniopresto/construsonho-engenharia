import React from "react";
import {Col} from "antd";
import DescriptionCards from "./DescriptionCards";

export default function Cards(props) {
    const {subtitle, imgUrl, description} = props;
    return (
        <>
            <Col flex="1 1 250px" >
                <div className="container__cards" style={{background: imgUrl, backgroundSize: "cover"}}>
                    <div className="overlay others-texts">
                        <div className="items head">
                            <DescriptionCards description={description}/>
                            <hr/>
                        </div>
                      <div className="items"/>
                    </div>
                </div>

                <div style={{paddingBottom: "1rem"}}>
                    <p className="subtitle-section">{subtitle}</p>
                    <div className="underline__card"/>
                </div>
            </Col>
        </>
    );
}
