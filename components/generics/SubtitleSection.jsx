import React from "react";

export default function SubtitleSection(props) {
  const { text } = props;
  return (
    <>
      <p className="subtitle-section"> {text} </p>
      <div className="underline__card" />
    </>
  );
}
