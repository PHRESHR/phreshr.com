import React, { useEffect, useState } from 'react';

const useFetch = (url: string) => {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		async function asyncFetch() {
			setLoading(true);
			try {
				const response = await fetch(url);
				const data = await response.json();

				setData(data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
			}
		}

		asyncFetch();
	}, []);
	return {
		data,
		loading
	};
};

export default useFetch;
