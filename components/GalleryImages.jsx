import React from "react";
import {useWidth} from "./hooks/useWidth";

export default function GalleryImages() {
    const widthSize = useWidth();

    return (
        <section className="bg__container bg__gray esconde">
            <div className="container">

                    <div
                        loading="lazy"
                        data-mc-src="b99a38c4-960c-4a45-8753-ac1ca882e661#instagram"></div>

                    <script
                        src="https://cdn2.woxo.tech/a.js#6241bfb22969230021b93427"
                        async data-usrc>
                    </script>

            </div>
        </section>
    );
}