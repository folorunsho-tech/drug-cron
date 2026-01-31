import { CronJob } from "cron";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const initjob = new CronJob(
	"0 0 7 * * *", // cronTime
	async function () {
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
	}, // onTick
	null, // onComplete
);
initjob.start();
const clearJob = new CronJob(
	"0 0 23 * * *", // cronTime
	async function () {
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
	}, // onTick
	null, // onComplete
);
clearJob.start();
