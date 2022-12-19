import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./movieCard.css";

const MovieCard = ({ item }) => {
	const [datapass, setDataPass] = useState([]);

	const navigate = useNavigate();

	const handleClickImg = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(
				"http://localhost:8000/api/movies/find/" + item._id
			);
			setDataPass(res.data);
			console.log(item._id);

			navigate(`/movie/${item._id}`, { state: item._id });
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<section className="movie-container" key={item._id}>
			<div className="movie-content">
				<div className="movie-box">
					<Link to={`/movie/${item._id}`} className="movie-box-img">
						<img
							src={item.photos}
							alt=""
							title="phim hayvl"
							className="Img-card"
						/>
					</Link>
					<div className="box-text">
						<Link
							to={`/movie/${item._id}`}
							className="title-movie"
							title="phim hayvl"
						>
							{item.name}
						</Link>

						<div className="container-mvtype">
							<span className="movie-type">
								{item.categories}
							</span>
						</div>

						<div className="button-mvc">
							<Link className="btn-play">Buy Tickets</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MovieCard;
