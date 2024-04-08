import React from 'react'
import NavBar from '../Components/NavBar';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default Home
