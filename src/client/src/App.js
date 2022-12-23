import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Movie from "./pages/Movie/Movie";
import Home from "./pages/Home/Home";
import MovieContent from "./pages/MovieContent/MovieContent";
import Seat from "./pages/Seat/Seat";
import Account from "./pages/Account/Account";

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
				{/* <Route path="/purchase/callback?partnerCode=&orderId=&requestId=&amount=&orderInfo=&orderType=&transId=&resultCode=&message=&payType=&responseTime=&extraData=&signature=" 
				element={<Purchase />}></Route> */}

				{/* <Route path="/purchase/callback?&partnerCode=MOMOWXV820211201&orderId=83edfb9a-e595-48d3-8cb0-846c8a0260e9&requestId=83edfb9a-e595-48d3-8cb0-846c8a0260e9&amount=60000&orderInfo=Thanh+to%C3%A1n+v%C3%A9+xem+phim+Avatar&orderType=momo_wallet&transId=1671787280304&resultCode=1006&message=Giao+d%E1%BB%8Bch+b%E1%BB%8B+t%E1%BB%AB+ch%E1%BB%91i+b%E1%BB%9Fi+ng%C6%B0%E1%BB%9Di+d%C3%B9ng.&payType=&responseTime=1671787280325&extraData=&signature=beac28e6c8bac9c551743b59ecd50b255eaa3e8fac6a9d60fb02ee86c87ad48a" element={<Purchase/>}></Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
