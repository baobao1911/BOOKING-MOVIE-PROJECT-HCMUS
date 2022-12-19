import "./movie.css";

import Navbarz from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MovieCard from "../../components/MovieCard/MovieCard";
import useFetch from "../../hooks/useFetch";

const MovieShowing = () => {
	const { data, loading, error } = useFetch(
		"http://localhost:8000/api/movies"
	);

	return (
		<div className="movieshowing">
			<Navbarz />
			<Header />
			<div className="feature">
				<div className="mscontainer">
					<div className="mstitle">
						<span>Phim Đang Chiếu</span>
					</div>
					<div className="listcard">
						{data.map((item) => (
							<MovieCard item={item} key={item._id} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MovieShowing;
