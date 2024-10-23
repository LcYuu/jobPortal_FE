import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryList.css'; // Import CSS cho bố cục
import logo from '../../../assets/images/common/logo.jpg';// Icon giả lập, thay thế bằng các icon thực tế của bạn

import googleIcon from '../../../assets/icons/google.png';
const categories = [
    { icon: googleIcon, title: 'Thiết kế', jobCount: 235 },
    { icon: googleIcon, title: 'Sales', jobCount: 756 },
    { icon: googleIcon, title: 'Marketing', jobCount: 140 },
    { icon: googleIcon, title: 'Tài Chính', jobCount: 325 },
    { icon: googleIcon, title: 'Công nghệ', jobCount: 436 },
    { icon: googleIcon, title: 'Kỹ thuật', jobCount: 542 },
    { icon: googleIcon, title: 'Kinh doanh', jobCount: 211 },
    { icon: googleIcon, title: 'Nhân sự', jobCount: 346 },
  ];

const CategoryList = () => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          icon={category.icon}
          title={category.title}
          jobCount={category.jobCount}
        />
      ))}
    </div>
  );
};

export default CategoryList;
