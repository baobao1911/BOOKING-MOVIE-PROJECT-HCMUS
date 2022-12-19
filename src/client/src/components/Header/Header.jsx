import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
	const handleButton= e =>{
		
	}
	return (
		<div className="header-container">
			<div className="header">
				<div className="headerList">
					<input type="button" value="phim" className="bnt-header" onClick={e => handleButton(e.target.value)}/>
					<input type="button" value="mua vé" className="bnt-header" onClick={e => handleButton(e.target.value)}/>
					<input type="button" value="Tin tức mới" className="bnt-header" onClick={e => handleButton(e.target.value)}/>
					
				</div>
			</div>
		</div>
	);
};

export default Header;
