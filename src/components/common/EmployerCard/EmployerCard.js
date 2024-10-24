import React from 'react';
import ImageCarousel from '../../layout/ImageCarousel';
import { Button } from "../../../ui/button";

const EmployerCard = ({ employer, currentImageIndex }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
      <ImageCarousel images={employer.images} currentImageIndex={currentImageIndex} />
      <h3 className="text-xl font-semibold mb-2">{employer.name}</h3>
      <p className="text-gray-600 text-center mb-4">{employer.description}</p>
      <p className="text-sm text-gray-500 mb-4">{employer.jobCount} vị trí đang mở</p>
      <Button variant="outline" className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
        Xem tất cả
      </Button>
    </div>
  );
};

export default EmployerCard;
