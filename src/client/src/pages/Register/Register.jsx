import "./register.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarSecond from "../../components/Navbar/NavbarSecond";
import Header from "../../components/Header/Header";

const Register = () => {
	const [firstName, setFirstName] = useState(undefined);
	const [lastName, setLastName] = useState(undefined);
	const [username, setusername] = useState(undefined);
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [confirmPwd, setConfirmPwd] = useState(undefined);

	const [success, setSuccess] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log({ firstName, lastName, username, email, password });
			const res = await axios.post(
				"http://localhost:8000/api/auth/register",
				{ firstName, lastName, username, email, password }
			);
			console.log(res);
			setSuccess(true);
		} catch (err) {
			console.log({ firstName, lastName, username, email, password });
		}
	};
	return (
		<div>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<Link to="/login">Sign In</Link>
					</p>
				</section>
			) : (
				<div>
					<NavbarSecond />
					<Header />
					<div className="sign-up-form">
						<h2 className="Title">Sign Up</h2>
						<form>
							<p></p>
							<input
								type="text"
								id="firstName"
								name="firstName"
								onChange={(e) => setFirstName(e.target.value)}
								placeholder="First Name"
								className="form-control"
							/>
							<p></p>
							<input
								type="text"
								id="lastName"
								name="lastName"
								onChange={(e) => setLastName(e.target.value)}
								placeholder="Last Name"
								className="form-control required"
							/>
							<p></p>
							<input
								type="text"
								id="username"
								name="username"
								onChange={(e) => setusername(e.target.value)}
								placeholder="Username"
								className="form-control"
							/>
							<p></p>
							<input
								type="email"
								id="email"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								className="form-control"
							/>
							<p></p>
							<input
								type="password"
								id="password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								className="form-control"
							/>
							<p></p>
							<input
								type="password"
								id="confirm-password"
								name="confirm-password"
								onChange={(e) => setConfirmPwd(e.target.value)}
								placeholder="Confirm password"
								className="form-control"
							/>
							<p></p>
							<button onClick={handleSubmit} className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Register;
