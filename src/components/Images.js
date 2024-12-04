import React from "react";
import '../App.css';

const importAll = (r) => {
  return r.keys().map(r);
};

// Import images from the folder
const images = importAll(require.context('../utils/images', false, /\.(png|jpe?g|svg)$/));
const ImageGallery = () => {
  // const images = [
  //   "https://drive.google.com/file/d/17Oln2dSIrm-LKvU9sQyKQTbLPx9gdN4Z/view?usp=drive_link",
  //   "https://via.placeholder.com/300x200/ff7f7f",
  //   "https://via.placeholder.com/300x200/ffbf7f",
  //   "https://via.placeholder.com/300x200/ffff7f",
  //   "https://via.placeholder.com/300x200/7fff7f",
  //   "https://via.placeholder.com/300x200/7f7fff",
  //   "https://via.placeholder.com/300x200/bf7fff",
  // ];

  return (
    <div className="py-10 dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:bg-black dark:text-white">
        Responsive Image Gallery
      </h2>
      <div className="flex relative overflow-x-scroll scrollbar-hide">
        <div className="flex flex-wrap gap-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 justify-center align-center">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] xl:w-[25%] h-[200px] overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={src}
                alt={`Gallery Item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
