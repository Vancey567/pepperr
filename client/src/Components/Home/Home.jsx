import React from 'react'
import Header from '../Header/Header';
import Features from '../Features/Features';
import Overview from '../Overview/Overview';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Focus from '../Focus/Focus';
import FinancialOverview from '../FinancialOverview/FinancialOverview';
import Advantages from '../Advantages/Advantages';
import Carousel from '../Carousel/Carousel';
import FeatureCarousel from '../FeatureCarousel/FeatureCarousel';

const Home = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <FinancialOverview />
        <FeatureCarousel />
        <Features />  
        <Advantages />
        <Overview />
        <Review />
        <Services />
        <Focus />
        <Footer />
    </div>
  )
}

export default Home