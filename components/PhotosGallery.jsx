import React, {useState, useCallback, useEffect, useLayoutEffect} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {photos_houses} from "../public/photos_houses";
import {Pagination} from "antd";

export default function PhotosGallery() {
    const [data, setData] = useState([...photos_houses.slice(0, 10)]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [totalPagination, setTotalPagination] = useState(photos_houses.length);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => {
        const totalImage = photos_houses.length;
        setTotalPagination(totalImage);

    }, [photos_houses]);

    function selected(page = 1, qtd = 10) {
        const newData = photos_houses
        const lastNumber = page * qtd;
        const firstNumber = page === 1 ? 0 : lastNumber - qtd;
        const dataSelected = newData.slice(firstNumber, lastNumber)

        setData(dataSelected)
    }

    return (
        <section className="bg__container bg__gray">
            <div className="container">
                <Gallery photos={data} onClick={openLightbox}/>
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={data.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>

                <Pagination
                    total={totalPagination}
                    style={{textAlign: "center", paddingTop: "1rem"}}
                    onChange={(page, pageSize) => selected(page, pageSize)}
                    showTitle={false}
                />
            </div>
        </section>
    );
}
