import React from "react";
import "./styles/gallery.css";
import WspGallery from "./WspGallery";
//importing the images
import founder from '../assets/work/founder.jpeg'
import work1 from "../assets/work/work1.jpeg";
import work2 from "../assets/work/work2.jpeg";
import work3 from "../assets/work/work3.jpeg";
import work4 from "../assets/work/work4.jpeg";
import work5 from "../assets/work/work5.jpeg";
import work6 from "../assets/work/work6.jpeg";
import work7 from "../assets/work/work7.jpeg";
import work8 from "../assets/work/work8.jpeg";
import work9 from "../assets/work/work9.jpeg";
import work10 from "../assets/work/work10.jpeg";
import work11 from "../assets/work/work11.jpeg";

const Gallery = () => {
    const galleryImages = [
        {
            img: founder,
        },
        {
            img: work1,
        },
        {
            img: work2,
        },
        {
            img: work3,
        },
        {
            img: work4,
        },
        {
            img: work5,
        },
        {
            img: work6,
        },
        {
            img: work7,
        },
        {
            img: work8,
        },
        {
            img: work9,
        },
        {
            img: work10,
        },
        {
            img: work11,
        },
    ];
    return (
        <div className="gallery-container">
            <h1 className="">Gallery</h1>
            <div className="gallery" id="gallery">
                <WspGallery gallerImages={galleryImages} />
            </div>
        </div>
    );
};

export default Gallery;
