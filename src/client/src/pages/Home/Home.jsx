// import React, { useState } from "react"
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

// import Slider from "react-slick"

// import HomeCard from "../../pages/Home/home1/HomeCard"
// import { homeData } from "../../data"


import "./home.css";




  
const Home = () => {

	return (
		<div className="home">
			<Navbar />
			<Header />
			<Feature/>
			<Footer />
		</div>
	);
};

export default Home;
