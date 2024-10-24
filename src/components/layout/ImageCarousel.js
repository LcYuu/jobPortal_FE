import React from 'react';

const ImageCarousel = ({ images, currentImageIndex }) => {
  return (
    <div className="relative w-24 h-24 mb-4">
      {images.map((img, imgIndex) => (
        <img
          key={imgIndex}
          src={img}
          alt={`Employer image ${imgIndex + 1}`}
          className={`rounded-full absolute transition-all duration-500 ease-in-out top-0 left-0
            ${imgIndex === currentImageIndex ? 'opacity-100 scale-110 z-10' : 'opacity-30 scale-90 z-0'}`}
          style={{ width: '100%', height: '100%' }}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
