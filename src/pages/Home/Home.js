// src/pages/Home/Home.js
import React from 'react';
import Slider from '../../components/Slider/Slider';
import CategoryList from '../../components/common/CategoryList/CategoryList';
import JobList from '../../components/common/JobList/JobList';
import Footer from '../../components/common/Footer/Footer';
import SearchEngine from '../../components/common/SearchEngine/SearchEngine';

const Home = () => {
  return (
    <>
      <Slider />
      <SearchEngine />  
      <CategoryList />
      <JobList />
      <Footer />
    </>
  );
};

export default Home;
