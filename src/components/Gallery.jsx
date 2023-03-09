import React from "react";
import "./styles/gallery.css";
import WspGallery from "./WspGallery";
//importing the images
// import Gallery1 from "../assets/Gallery/gallery1.JPG";
// import Gallery2 from "../assets/Gallery/gallery2.jpeg";
// import Gallery3 from "../assets/Gallery/gallery3.jpeg";
// import Gallery4 from "../assets/Gallery/gallery4.jpeg";
// import Gallery5 from "../assets/Gallery//gallery5.jpeg";
// import Gallery6 from "../assets/Gallery/gallery6.jpeg";
// import Gallery7 from "../assets/Gallery/gallery7.jpeg";
// import Gallery8 from "../assets/Gallery/gallery8.jpeg";
// import Gallery9 from "../assets/Gallery/gallery9.jpeg";
// import Gallery10 from "../assets/Gallery/gallery10.jpeg";
// import Gallery11 from "../assets/Gallery/gallery11.jpeg";
// import Gallery12 from "../assets/Gallery/galleey12.png";

// import Gallery14 from "../assets/Gallery/galleey14.JPG";
// import Gallery15 from "../assets/Gallery/galleey15.JPG";
// import Gallery16 from "../assets/Gallery/galleey16.JPG";
// import Gallery17 from "../assets/Gallery/galleey17.JPG";
// import Gallery18 from "../assets/Gallery/galleey18.JPG";
// import Gallery19 from "../assets/Gallery/galleey19.jpg";
// import Gallery20 from "../assets/Gallery/gallery20.jpeg";
// import Gallery21 from "../assets/Gallery/gallery21.jpeg";
// import Gallery22 from "../assets/Gallery/gallery22.jpeg";
// import Gallery23 from "../assets/Gallery/gallery23.jpeg";
// import Gallery24 from "../assets/Gallery/gallery24.jpeg";
// import Gallery25 from "../assets/Gallery/gallery25.jpeg";

const Gallery = () => {
    const galleryImages = [
        {
            img: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
        },
        {
            img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
        },
        {
            img: "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
        },
        {
            img: "https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230118463/197249183-fantasy-alien-planet-mountain-and-lake-3d-illustration.jpg?ver=6",
        },
        {
            img: "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg",
        },
        {
            img: "https://socialstatusdp.com/wp-content/uploads/2022/12/Lord-Krishna-Images-with-Flute-with-forest-Background.jpg",
        },
        //hardcoding images for now
        {
            img: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
        },
        {
            img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
        },
        {
            img: "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
        },
        {
            img: "https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230118463/197249183-fantasy-alien-planet-mountain-and-lake-3d-illustration.jpg?ver=6",
        },
        {
            img: "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg",
        },
        {
            img: "https://socialstatusdp.com/wp-content/uploads/2022/12/Lord-Krishna-Images-with-Flute-with-forest-Background.jpg",
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
