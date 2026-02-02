const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const initjob = async () => {
	console.log("Base url is: " + baseUrl);

	console.log("Init Summary started at " + new Date());
	try {
		const res = await fetch(baseUrl + "/api/summarizer/init", {
			method: "GET",
		});
		console.log("Response Status: " + res.status + " " + res.statusText);
	} catch (error) {
		console.error("Error fetching init endpoint: " + error);
	}
	console.log("Init Summary ended at " + new Date());
};
initjob();
