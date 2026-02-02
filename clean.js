const baseUrl = process.env.BASE_URL || "http://localhost:3000";

const cleanJob = async () => {
	console.log("Base url is: " + baseUrl);
	console.log("Clean Summary started at " + new Date());
	try {
		const res = await fetch(baseUrl + "/api/summarizer/tally_cleaner", {
			method: "DELETE",
		});
		console.log("Response Status: " + res.status + " " + res.statusText);
	} catch (error) {
		console.error("Error fetching tally cleaner endpoint: " + error);
	}
	console.log("Clean Summary ended at " + new Date());
};
cleanJob();
