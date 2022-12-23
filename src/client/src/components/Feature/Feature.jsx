// import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./feature.css";
// import { Autoplay, Pagination, Navigation } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import Slider from "react-slick"
import HomeCard from "../../pages/Home/home1/HomeCard"
import { homeData } from "../../data"
const Feature = () => {
	const { data, loading, error } = useFetch(
		"http://localhost:8000/api/movies"
	);
	const [items, setItems] = useState(homeData)
		

	  
	return (
		<div className="feature">
		    {loading ? (
				console.log("loading api")
				) : (
			<div className="feature-container">
				<div className="homeContainer">
				
						{items.map((item) => (
							<HomeCard item={item} key={item._id} />
						))}
						
				</div>
			</div>
			)}

			{/* <section className="popupar container_f" id="popular">
				<div className="heading">
					<h2 className="heading-title">Popular Movies</h2>
				</div>
				<div className="popular-content">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
						<SwiperSlide>Slide 5</SwiperSlide>
						<SwiperSlide>Slide 6</SwiperSlide>
						<SwiperSlide>Slide 7</SwiperSlide>
						<SwiperSlide>Slide 8</SwiperSlide>
						<SwiperSlide>Slide 9</SwiperSlide>
					</Swiper>
				</div>
			</section> */}
		</div>
	);
};

export default Feature;
