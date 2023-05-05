import React from "react";

export default function DescriptionCards(props) {
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