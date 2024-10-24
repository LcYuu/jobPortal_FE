// src/pages/Home/Home.js
import React from 'react';
import Slider from '../../components/Slider/Slider';
import CategoryList from '../../components/common/CategoryList/CategoryList';
import JobList from '../../components/common/JobList/JobList';
import Footer from '../../components/common/Footer/Footer';
import SearchEngine from '../../components/common/SearchEngine/SearchEngine';
import  TopListEmployers  from '../../components/TopListEmployer/TopListEmployer';
const Home = () => {
  return (
    <>
      <Slider />
      <CategoryList />
      <TopListEmployers/>
      <JobList />
      <JobList />
      <Footer />
    </>
  );
};

export default Home;
