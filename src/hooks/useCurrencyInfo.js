import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(
			`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
		)
			.then((res) => res.json())
			// res[currency], bcz currency is a query, that's gonna access the currency from the response/array as per chosen by us...
			.then((res) => setData(res[currency]));
	}, [currency]);

	return data;
};

export default useCurrencyInfo;
