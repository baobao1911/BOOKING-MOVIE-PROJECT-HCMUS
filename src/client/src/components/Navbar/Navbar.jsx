import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const { user } = useContext(AuthContext);
	console.log(user.username);
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
						class="logo"
					/>
				</Link>

				{user ? (
					<div className="logo-user">
						<Link to="/account"> 
						<img  src="https://www.redditstatic.com/avatars/avatar_default_01_A5A4A4.png" alt="" />
						</Link>
					</div>
				) : (
					<div className="navItems">
						{/* <button className="navButton" style={{ color: "black" }}>
							Register
						</button>
						<button className="navButton" style={{ color: "black" }}>
							Login
						</button> */}

						<Link className="navButton" style={{ color: "black", backgroundColor: "white" }} to="/register">
							Register
						</Link>
						<Link className="navButton" style={{ color: "black", backgroundColor: "white" }} to="/login">
							Login
						</Link>
	
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
