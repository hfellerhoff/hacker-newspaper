const fetchData = async (url: string): Promise<Record<string, unknown>> => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
};

export default fetchData;
