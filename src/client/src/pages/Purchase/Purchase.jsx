import axios from "axios";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './purchase.css'
const Purchase = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// single-time read
	const params = Object.fromEntries([...searchParams]);
    // const resultCode = params.get('resultCode');
	console.log(params)
	return (
		<div>
			<Navbar />
			<div className="F">
				<div className="container-pur">
					{parseInt(params.resultCode,10) === 0 ? 
						<div>
							<span>Thanh toán thành công</span>
						</div>
						:
						<div>
							<span>Thanh toán thất bại</span>
						</div>	
					}
					<Link to={'/'}>Quay về trang chính</Link>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Purchase;
