import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Movie from "./pages/Movie/Movie";
import Home from "./pages/Home/Home";
import MovieContent from "./pages/MovieContent/MovieContent";
import Seat from "./pages/Seat/Seat";
import Account from "./pages/Account/Account";
import Something from "./pages/NothingPage/Something";
import Payment from "./pages/Payment/Payment";
import Purchase from "./pages/Purchase/Purchase";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/movie" element={<Movie />} />
				<Route path="/movie/:_id" element={<MovieContent />} />
				<Route path="/seat/:_id" element={<Seat />} />
				<Route path="/account" element={<Account />} />
				<Route path="/NothingPage" element={<Something/>}/>
				<Route path="/payment" element={<Payment/>}/>
				<Route path="/purchase_status" element={<Purchase />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
