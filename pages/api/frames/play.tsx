/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next/pages-router/server";

const GAME_URL = {
	ios: "https://testflight.apple.com/join/x7XlR5Ij",
	android: "https://play.google.com/store/apps/details?id=com.zeeverse.zee",
	webgl: "https://play.zee-verse.com/",
	epic: "https://store.epicgames.com/en-US/p/zeeverse-92a34e",
};

const frames = createFrames({
	basePath: "/api/frames",
});

const handleRequest = frames(async () => {
	return {
		image: "https://cdn.zee-verse.com/images/background.jpg",
		// image: (
		// 	<div tw="bg-green-800 text-white w-full h-full justify-center items-center flex">
		// 		<h1 className="font-extrabold text-4xl">PLAY ZEEVERSE FOR FREE</h1>
		// 	</div>
		// ),
		imageOptions: {
			aspectRatio: "1.91:1",
		},
		buttons: [
			<Button action="link" target={`${GAME_URL.android}`}>
				Android
			</Button>,
			<Button action="link" target={`${GAME_URL.ios}`}>
				IOS
			</Button>,
			<Button action="link" target={`${GAME_URL.webgl}`}>
				Play on website
			</Button>,
			<Button action="link" target={`${GAME_URL.epic}`}>
				Epic Launcher
			</Button>,
		],
	};
});

export default handleRequest;
