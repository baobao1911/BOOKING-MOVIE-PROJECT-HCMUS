import "./register.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarSecond from "../../components/Navbar/NavbarSecond";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setusername] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPwd, setConfirmPwd] = useState("");
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		if (password == confirmPwd){
			e.preventDefault();
			try {
				const res = await axios.post(
					"http://localhost:8000/api/auth/register",
					{ firstName, lastName, username, email,phone, password }
				);
				console.log(res)
				setSuccess(true);
			} catch (err) {
				console.log({ firstName, lastName, username, email,phone, password });
			}
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
						<form >
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
							<input type="email" name="email" ng-model="email" onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								className="form-control" />
								{email.match("/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/") ? (console.log("match")):(
									console.log("notmatch")
								)}
							<p></p>
							<input
								type="tel"
								id="tel"
								name="email"
								onChange={(e) => setPhone(e.target.value)}
								placeholder="Phone"
								className="form-control"
								pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
							
							{(confirmPwd.length > 1 & password.length > 6 &  password === confirmPwd) ? (<FontAwesomeIcon icon={faCheck} />):(
								<span className="checkpass"> Mật khẩu không trùng khớp</span>
							)}
							<p></p>
							<input type="submit" value="Submit" onClick={handleSubmit} className="btn btn-primary"/>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Register;
