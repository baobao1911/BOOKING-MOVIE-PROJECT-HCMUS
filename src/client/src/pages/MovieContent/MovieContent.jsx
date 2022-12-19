import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import YtbEmbed from "../../components/YtbEmbed/YtbEmbed";
import Navbar from "../../components/Navbar/Navbar";

import "./movieContent.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";

const MovieContent = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	const { data, loading, error } = useFetch(
		`http://localhost:8000/api/movies/find/${id}`
	);

	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	console.log(data);

	const handleClick = () => {
		if (user) {
			navigate(`/seat/${data._id}`);
		} else {
			navigate("/login");
		}
	};
	return (
		<div className="contentt">
			<Navbar />
			<Header />
			{loading ? (
				"loading"
			) : (
				<section className="movieinfor">
					<div className="simpleinfor">
						<div className="Img">
							<img
								src={data.photos}
								alt=""
								className="Img-movie"
							/>
						</div>
						<div className="information">
							<div className="movie-title">
								<span className="movie-name">{data.name}</span>
							</div>

							<div className="movie-infor movie-director">
								<span>Author : </span>
								<span className="std">{data.author}</span>
							</div>
							<div className="movie-actress movie-infor">
								<span>Cast : </span>
								<span className="std"> {data.cast}</span>
							</div>
							<div className="movie-genre movie-infor">
								<span>Categories : </span>
								<span className="std"> {data.categories}</span>
							</div>
							<div className="movie-release movie-infor">
								<span>Release : </span>
								<span className="std"> {data.dates}</span>
							</div>
							<div className="movie-rating movie-rated-web movie-infor">
								<span>Rating : </span>
								<span className="std">{data.rating}</span>
							</div>

							<div className="movie-detail-fb-booking">
								<button
									onClick={handleClick}
									className="booking-ticket"
								>
									Booking Now
								</button>
							</div>
						</div>
					</div>
					<div className="deepinfor">
						<div className="details">
							<h3 className="details-title"> Details </h3>
							<div className="std">{data.desc}</div>
						</div>
						<div className="trailermovie">
							<h3 className="details-title">Trailer</h3>
							<YtbEmbed embedId={data.trailer} />
						</div>
					</div>
				</section>
			)}
			<Footer />
		</div>
	);
};

export default MovieContent;
