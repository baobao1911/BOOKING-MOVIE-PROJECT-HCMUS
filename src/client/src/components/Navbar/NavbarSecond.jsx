import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NavbarSecond = () => {
	return (
		<div className="navbar">
			<div className="navContainer">
				<Link
					to="/"
					style={{ color: "inherit", textDecoration: "none" }}
				>
					<img
						src={process.env.PUBLIC_URL + "/icon.png"}
						alt="Logo"
						width="150px"
						class="logo"
					/>
				</Link>
			</div>
		</div>
	);
};

export default NavbarSecond;
