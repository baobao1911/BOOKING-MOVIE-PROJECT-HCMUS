import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:8000/api/movies";

const useFetch = () => {
	const [data1, setData] = useState([]);
	const [loading1, setLoading] = useState(false);
	const [error1, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(url);
				setData(res.data);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	const reFetch = async () => {
		setLoading(true);
		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return { data1, loading1, error1, reFetch };
};

export default useFetch;
