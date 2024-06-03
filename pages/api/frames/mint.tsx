/* eslint-disable react/jsx-key */
import { getTokenUrl } from "frames.js";
import { createFrames, Button } from "frames.js/next/pages-router/server";
import { baseSepolia } from "viem/chains";

const frames = createFrames({
	basePath: "/api/frames",
});

const handleRequest = frames(async () => {
	return {
		image: (
			<div tw="bg-green-800 text-white w-full h-full justify-center items-center flex">
				<h1 className="font-extrabold text-4xl" style={{ textAlign: "center" }}>
					Transaction to MINT Zeeverse NFT
				</h1>
			</div>
		),
		imageOptions: {
			aspectRatio: "1:1",
		},
		buttons: [
			<Button
				action="mint"
				target={getTokenUrl({
					address: "0x5D26e97F4383dDeAC24F0DF514452906fd35B088",
					chain: baseSepolia,
					tokenId: "0",
				})}
			>
				Mint
			</Button>,
		],
	};
});

export default handleRequest;
