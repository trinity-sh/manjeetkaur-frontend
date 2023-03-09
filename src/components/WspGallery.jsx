import React, { useState } from "react";
import "./styles/gallery.css";
import { ImNext, ImPrevious } from "react-icons/im"
import { AiOutlineCloseCircle } from "react-icons/ai"

const WspGallery = ({ gallerImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  const handleCloseModal = ()=>{
    setOpenModal(false);
  }
  const prevSlide = () =>{
    slideNumber === 0 ? setSlideNumber(gallerImages.length - 1) : setSlideNumber(slideNumber -1);
  }
  const nextSlide = ()=>{
    slideNumber + 1 === gallerImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
  }
  return (
    <>
    {openModal && 
        <div className={openModal ? "model open" : "model"}>
            <AiOutlineCloseCircle className="btn-close" onClick={handleCloseModal} />
            <ImNext className="btn-next" onClick={prevSlide} />
            <ImPrevious className="btn-prev" onClick={nextSlide} />
                <img src={gallerImages[slideNumber].img} />
        </div>
    }
      <div className="galleryWrap">
        {gallerImages &&
          gallerImages.map((slide, index) => {
            return (
              <div
                className="single-imgs"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img className="single-pic sm:w-full md:w-auto lg:w-auto xl:w-auto" src={slide.img} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default WspGallery;

// import React from "react";
// const images = {
//     images: [
//         {
//             src: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
//             alt: "image1",
//         },
//         {
//             src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
//             alt: "image2",
//         },
//         {
//             src: "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
//             alt: "image3",
//         },
//         {
//             src: "https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230118463/197249183-fantasy-alien-planet-mountain-and-lake-3d-illustration.jpg?ver=6",
//             alt: "image4",
//         },
//         {
//             src: "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg",
//             alt: "image5",
//         },
//         {
//             src: "https://socialstatusdp.com/wp-content/uploads/2022/12/Lord-Krishna-Images-with-Flute-with-forest-Background.jpg",
//             alt: "image6",
//         },
//     ],
// };

// function Gallery() {
//     return (
//         <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
//             <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
//                 <svg
//                     viewBox="0 0 1313 771"
//                     aria-hidden="true"
//                     className="ml-[max(50%,38rem)] w-[82.0625rem]"
//                 >
//                     <path
//                         id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
//                         fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
//                         d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
//                     />
//                     <defs>
//                         <linearGradient
//                             id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
//                             x1="1313.17"
//                             x2="-88.881"
//                             y1=".201"
//                             y2="539.417"
//                             gradientUnits="userSpaceOnUse"
//                         >
//                             <stop stopColor="#9089FC" />
//                             <stop offset={1} stopColor="#FF80B5" />
//                         </linearGradient>
//                     </defs>
//                 </svg>
//             </div>
//             <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
//                 <svg
//                     viewBox="0 0 1313 771"
//                     aria-hidden="true"
//                     className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
//                 >
//                     <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
//                 </svg>
//             </div>
//             <div className="mx-auto max-w-xl text-center">
//                 <h2 className="text-xl font-semibold leading-8 tracking-tight text-pink-600">
//                     Gallery
//                 </h2>
//                 <p className="mt-2 md:text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//                     A glipmse of our AMAZING WORK!
//                 </p>
//             </div>
//             <div className="max-w-10xl mx-auto p-4 sm:p-6 lg:p-8" id="gallery">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
//                     {images.images.map((item) => (
//                         <img
//                             src={item.src}
//                             alt={item.alt}
//                             className="w-full h-full"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Gallery;
