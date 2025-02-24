import { useEffect, useState } from "react";
const api = import.meta.env.VITE_API_URL;

const useCurrencyInfo = (currency) => {
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(`${api}/${currency}.json`)
			.then((res) => res.json())
			.then((res) => setData(res[currency]));
	}, [currency]);

	return data;
};

export default useCurrencyInfo;
