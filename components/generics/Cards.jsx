import React from "react";
import { Col } from "antd";

export default function Cards(props) {
  const { subtitulo, linkimg, description } = props;
  return (
    <>
      <Col flex="1 1 200px" xl={{ offset: 2 }}>
        <div className="flip-container">
          <div className="flipper">
            <div
              className="front"
              style={{ background: linkimg, backgroundSize: "cover" }}
            ></div>
            <div className="back">
              <div className="underlaine__card" />
              <p className="outhertexts">{description}</p>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "1rem" }}>
          <p className="subtitlesection">{subtitulo}</p>
          <div className="underlaine__card" />
        </div>
      </Col>
    </>
  );
}
