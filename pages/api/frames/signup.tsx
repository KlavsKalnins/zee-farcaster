/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next/pages-router/server";

const frames = createFrames({
	basePath: "/",
});

const handleRequest = frames(async () => {
	return {
		image: "https://media1.tenor.com/m/u92Rn17S9F8AAAAC/zeeverse-gm.gif",
		imageOptions: {
			aspectRatio: "1.91:1",
		},
		buttons: [
			<Button action="link" target="/user/signup">
				Sign Up
			</Button>,
		],
	};
});

export default handleRequest;
