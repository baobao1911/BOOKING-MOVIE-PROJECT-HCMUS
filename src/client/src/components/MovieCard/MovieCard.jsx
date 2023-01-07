import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./movieCard.css";

const MovieCard = ({ item }) => {
    const { user } = useContext(AuthContext)
	const navigate = useNavigate();

	const handleNavigate = async (e)=>{
		if(user){
			navigate(`/seat/${item._id}`,{state: {id:item}});
		}else{
			navigate("/login", { replace: true });
		}
	}
	function setupTime(e) {
		var d = new Date(e)
		return d.toLocaleString('es-us',{ hour12: false,
										  day:"numeric", 
										  month:"numeric",
										  year: "numeric",
										})
	  }
	return (
		<section className="movie-container" key={item._id}>
			<div className="movie-content">
				<div className="movie-box">
					<Link to={`/movie/${item._id}`} className="movie-box-img">
						<img
							src={item.photos}
							alt=""
							className="Img-card"
						/>
					</Link>
					<div className="box-text">
						<Link
							to={`/movie/${item._id}`}
							className="title-movie"
						
						>
							{item.name}
						</Link>

						<div className="container-mvtype">
							<span className="movie-type">
								{item.categories}
							</span>
						</div>
						
						<div className="container-start-time">
							<div className="start-time">
								<span>{setupTime(item.dates)}</span>
							</div>
						</div>
						
						<div className="container-rating">
							<div className="rating">
							<span>Rating: {item.rating}</span>
							</div>
						</div>

						<div className="button-mvc">
							<input type="button" value="Buy Tickets" className="btn-play"  onClick={handleNavigate}/>
							{/* <Link className="btn-play" to={`/seat/${item._id}`}>Buy Tickets</Link> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MovieCard;
