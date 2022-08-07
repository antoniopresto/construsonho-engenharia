import React from "react";
import {Col} from "antd";
import Descriptioncards from "./Descriptioncards";

export default function Cards(props) {
    const {subtitulo, linkimg, description} = props;
    return (
        <>
            <Col flex="1 1 250px" >
                <div className="container_cards" style={{background: linkimg, backgroundSize: "cover"}}>
                    <div className="overlay outhertexts">
                        <div className="items head">
                            <Descriptioncards description={description}/>
                            <hr/>
                        </div>
                      <div className="items"/>
                    </div>
                </div>

                <div style={{paddingBottom: "1rem"}}>
                    <p className="subtitlesection">{subtitulo}</p>
                    <div className="underlaine__card"/>
                </div>
            </Col>
        </>
    );
}
