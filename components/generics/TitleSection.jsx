import React from "react";

export default function TitleSection(props) {
  const { text, title, cor } = props;
  return (
    <>
      <div style={{paddingBottom: "1rem"}}>
        <span className="span-section">{text}</span>
        <h4
          className="title-section"
          style={{
            color: cor,
          }}
        >
          {title}
        </h4>
        <div className="underline__card" />
      </div>
    </>
  );
}
