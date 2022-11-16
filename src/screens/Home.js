import React from 'react';
import Banner from '../components/Banner';
import CarsProject from '../components/CarsProject';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import OurStories from '../components/OurStories';
import OurVision from '../components/OurVision';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CarsProject />
      <OurVision />
      <OurStories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
