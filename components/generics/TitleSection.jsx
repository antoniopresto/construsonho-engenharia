import React from "react";

export default function TitleSection(props) {
  const { text, title, cor } = props;
  return (
    <>
      <div style={{paddingBottom: "1rem"}}>
        <span className="spansection">{text}</span>
        <h4
          className="titlesection"
          style={{
            color: cor,
          }}
        >
          {title}
        </h4>
        <div className="underlaine__card" />
      </div>
    </>
  );
}
