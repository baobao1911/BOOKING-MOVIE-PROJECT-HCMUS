import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
const Header = () => {
	const [searchContent,setSearchContent] = useState("none")
	const { data, loading, error } = useFetch(
		"http://localhost:8000/api/movies"
	);
	const [it,setIt] = useState()
	const handleSearch = () =>{
		console.log(searchContent)
		var arr = []
		if(!loading){
			data.forEach((item)=> {
				arr.push(item.name)
			})
			console.log(arr)
		}
	}
	return (
		<div className="header-container">
			<div className="header">
				<div className="headerList">
					<div className="linkto">
						<Link className="linkk" to={"/movie"}>Phim</Link>
						<Link className="linkk" to={"/movie"}>Tin tức mới</Link>
					</div>
					<div className="search">
						<input type="text" placeholder="Tìm kiếm" className="search-input"  onChange={e=> setSearchContent(e.target.value)} />
						<button className="btn-search" onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Header;
