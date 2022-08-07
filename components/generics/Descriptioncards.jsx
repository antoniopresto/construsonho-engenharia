import React from "react";

export default function Descriptioncards(props) {
    const {description} = props;

    return (
        <>
            <ul>
                {description.map((e, key) => {
                    return <li key={key}>{e}</li>
                })}
            </ul>
        </>
    );

};