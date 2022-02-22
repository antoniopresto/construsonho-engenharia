import React from "react";

export default function Subtitlesection(props) {
  const { text } = props;
  return (
    <>
      <p className="subtitlesection"> {text} </p>
      <div className="underlaine__card" />
    </>
  );
}
