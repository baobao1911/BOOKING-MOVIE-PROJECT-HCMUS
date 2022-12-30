import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
const Header = () => {
	const [searchContent,setSearchContent] = useState("")

	const { data, loading, error } = useFetch(
		"http://localhost:8000/api/movies"
	);

	// function handleSearch (){
	// 	if (!loading){
	// 		return (
					
					
	// 		)
	// 	}
	// }
	// const temp = handleSearch()
	return (
		<div className="header-container">
			<div className="header">
				<div className="headerList">
					<div className="linkto">
						<Link className="linkk" to={"/movie"}>Movie</Link>
						<Link className="linkk" to={"/movie"}>News</Link>
					</div>

					<div className="search-container">
						<div className="search">
							<input type="text" placeholder="Tìm kiếm" className="search-input"  onChange={e => setSearchContent(e.target.value)} />
							<div className="autocom-box">
								{searchContent.length > 0 && (data.filter((item)=>
									item.name.toLowerCase().includes(searchContent)
									).map((item)=>(
										<li key={item._id} className='search-item'>
											<Link className="searchto-mv" to={`/movie/${item._id}`}>{item.name}</Link>
										</li>
								))) }
							</div>
							<button className="btn-search" ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
							
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Header;
