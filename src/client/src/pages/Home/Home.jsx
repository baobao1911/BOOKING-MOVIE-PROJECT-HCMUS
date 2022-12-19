// import React, { useState } from "react"
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

// import Slider from "react-slick"

// import HomeCard from "../../pages/Home/home1/HomeCard"
// import { homeData } from "../../data"


import "./home.css";

// const SampleNextArrow = (props) => {
// 	const { onClick } = props
// 	return (
// 	  <div className='control-btn' onClick={onClick}>
// 		<button className='next'>
// 		  <i class='fa fa-chevron-right'></i>
// 		</button>
// 	  </div>
// 	)
//   }
//   const SamplePrevArrow = (props) => {
// 	const { onClick } = props
// 	return (
// 	  <div className='control-btn' onClick={onClick}>
// 		<button className='prev'>
// 		  <i class='fa fa-chevron-left'></i>
// 		</button>
// 	  </div>
// 	)
//   }


  
const Home = () => {
	// const [items, setItems] = useState(homeData)
	// const settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	nextArrow: <SampleNextArrow />,
	// 	prevArrow: <SamplePrevArrow />,
	//   }
	return (
		<div className="home">
			<Navbar />
			<Header />
			<Feature/>
			{/* <div className="homeContainer">
				
				<Slider {...settings}>
					{items.map((item) => {
						return (
							<>
								<HomeCard key={item.id} item={item} />
							</>
						)
					})}
				</Slider>
			</div> */}

			<Footer />
		</div>
	);
};

export default Home;
