import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NavbarSecond = () => {
	return (
		<div className="navbar-container">
			<div className="navbar">
			<Link
					to="/"
					style={{ color: "inherit", textDecoration: "none" }}
				>
					{/* <span className="logo">Fox Cinema</span> */}
					<img
						src={process.env.PUBLIC_URL + "/icon.png"}
						alt="Logo"
						width="200px"
						className="logo"
					/>
				</Link>
			</div>
		</div>
	);
};

export default NavbarSecond;
