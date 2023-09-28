"use client";

import Image from "next/image";
import { useState } from "react";

export const PopupModal = () => {
	const [isOn, setIsOn] = useState({
		camera: false,
		audio: false,
	});

	return (
		<section className="w-full max-w-[300px] bg-white h-[439px] rounded-3xl text-primary px-4 py-6 modal flex flex-col gap-[24px]">
			<div className="flex w-full justify-between items-center">
				<div className="flex items-center gap-2">
					<Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
					<p className="font-bold text-[16px] font-Sora">HelpMeOut</p>
				</div>
				<div className="flex items-center gap-4">
					<Image
						src="/assets/setting.svg"
						alt="settings"
						width={20}
						height={20}
					/>
					<Image
						src="/assets/close.svg"
						alt="settings"
						width={20}
						height={20}
					/>
				</div>
			</div>

			<div className=" text-primary/85 text-[14px] font-Work w-full max-w-[230px]">
				<p>This extension helps you record and share help videos with ease.</p>
			</div>
			<div className="flex w-full justify-center gap-8">
				<div className="flex flex-col items-center gap-2">
					<Image
						src="/assets/monitor.svg"
						alt="monitor icon"
						width={32}
						height={32}
					/>
					<span className="font-semibold text-[14px] font-Work opacity-40">
						Full screen
					</span>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Image
						src="/assets/tabs.svg"
						alt="tabs icon"
						width={32}
						height={32}
					/>
					<span className="font-[600] text-[14px] font-Work">Current Tab</span>
				</div>
			</div>
			<div className="flex flex-col gap-[24px]">
				<div className="flex justify-between w-full items-center border-2 border-primary p-[12px] rounded-[16px]">
					<div className="flex gap-2">
						<Image
							src="/assets/video.svg"
							alt="settings"
							width={24}
							height={24}
						/>
						<span className="font-medium text-[14px] font-Work  text-primDark">
							Camera
						</span>
					</div>
					<div
						className={`w-[36px] h-[20px] p-[2px] bg-primary rounded-full relative before:absolute before:content-[''] before:h-[16px] before:w-[16px] before:bg-white before:rounded-full cursor-pointer before:active:scale-90   ${
							isOn.camera && "before:right-0 transition-all duration-300"
						} `}
						onClick={() => {
							setIsOn({ ...isOn, camera: !isOn.camera });
						}}
					/>
				</div>
				<div className="flex justify-between w-full items-center border-2 border-primary p-[12px] rounded-[16px]">
					<div className="flex gap-2">
						<Image
							src="/assets/video.svg"
							alt="settings"
							width={24}
							height={24}
						/>
						<span className="font-medium text-[14px] font-Work  text-primDark">
							Audio
						</span>
					</div>
					<div
						className={`w-[36px] h-[20px] p-[2px] bg-primary rounded-full relative before:absolute before:content-[''] before:h-[16px] before:w-[16px] before:bg-white before:rounded-full cursor-pointer before:active:scale-90   ${
							isOn.audio && "before:right-0 transition-all duration-300"
						} `}
						onClick={() => {
							setIsOn({ ...isOn, audio: !isOn.audio });
						}}
					/>
				</div>
				<div className="flex justify-center w-full items-center bg-primary p-[12px] rounded-[16px] ">
					<p className="text-[16px] font-Work text-white">Start Recording</p>
				</div>
			</div>
		</section>
	);
};
