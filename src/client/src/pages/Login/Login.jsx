import { AuthContext } from "../../context/AuthContext";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarSecond from "../../components/Navbar/NavbarSecond";
import "./login.css";
import axios from "axios";
import Header from "../../components/Header/Header";

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const { loading, error, dispatch } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleChange = (e) => {
		// setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

		setCredentials((prev) => {
			console.log({ ...prev, [e.target.id]: e.target.value });
			return { ...prev, [e.target.id]: e.target.value };
		});
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			console.log(credentials);
			const res = await axios.post(
				"http://localhost:8000/api/auth/login",
				credentials
			);
			console.log(res.data.isAdmin);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			navigate("/");
		} catch (err) {
			console.log(err);
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	return (
		<div>
			<NavbarSecond />
			<Header />
			<div className="auth-form-container">
				<h2>Login</h2>
				<form className="login-form border-1">
					<input
						type="text"
						id="username"
						name="username"
						onChange={handleChange}
						placeholder="Username"
						className="form-control"
					/>
					<input
						type="password"
						id="password"
						ame="password"
						onChange={handleChange}
						placeholder="Password"
						className="form-control my-3"
					/>
					<button
						disabled={loading}
						onClick={handleClick}
						type="submit"
						className="btn btn-primary"
					>
						Log In
					</button>
					{error && <span>{error.message}</span>}
				</form>
				<Link className="text-primary my-3" to="/register">
					Don't have an account? Register here.
				</Link>
			</div>
		</div>
	);
};

export default Login;
