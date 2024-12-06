import React from "react";
import '../App.css';

const importAll = (r) => {
  return r.keys().map(r);
};

// Import images from the folder
const images = importAll(require.context('../utils/images', false, /\.(png|jpe?g|svg)$/));
const ImageGallery = () => {
  let random  = Math.ceil(Math.random()*1000)/1.5;
  console.log(random)

  return (
    <div className="py-10 dark:bg-black dark:text-white">
      <div className="flex relative overflow-x-scroll scrollbar-hide">
        <div className="flex flex-wrap gap-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 justify-center align-center">
          {images.map((src, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] xl:w-auto h-[500px] overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out`}
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
