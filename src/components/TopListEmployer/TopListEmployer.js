import React, { useState, useEffect } from 'react';
import EmployerCard from '../common/EmployerCard/EmployerCard';
import logo from '../../assets/images/common/logo.jpg';
import logo1 from '../../assets/images/common/logo1.jpg';

export default function TopListEmployers() {
  const employers = [
    {
      name: "TechCorp",
      images: [
        logo,logo1
      ],
      description: "Leading innovation in software development",
      jobCount: 150
    },
    {
      name: "GlobalFinance",
      images: [
        logo,logo1
      ],
      description: "Shaping the future of financial services",
      jobCount: 120
    },
    {
      name: "GreenEnergy Co.",
      images: [
        logo,logo1
      ],
      description: "Pioneering sustainable energy solutions",
      jobCount: 80
    },
    {
      name: "HealthTech Inc.",
      images: [
        logo,logo1
      ],
      description: "Revolutionizing healthcare through technology",
      jobCount: 100
    },
    {
      name: "EduLearn",
      images: [
        logo,logo1
      ],
      description: "Transforming education with innovative platforms",
      jobCount: 60
    },
    {
      name: "AeroSpace Systems",
      images: [
        logo,logo1
      ],
      description: "Advancing aerospace technology and exploration",
      jobCount: 90
    }
  ];

  const [currentImageIndexes, setCurrentImageIndexes] = useState(employers.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes(prevIndexes =>
        prevIndexes.map((index, i) => (index + 1) % employers[i].images.length)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [employers]);

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Top nhà tuyển dụng phổ biến</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employers.map((employer, index) => (
            <EmployerCard
              key={index}
              employer={employer}
              currentImageIndex={currentImageIndexes[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
