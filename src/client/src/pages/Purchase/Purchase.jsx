import axios from "axios";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Purchase = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// single-time read
	const params = Object.fromEntries([...searchParams]);
    const resultCode = params.get('resultCode');

	return (
		<div>
			<Navbar />

			<Footer />
		</div>
	);
};

export default Purchase;
