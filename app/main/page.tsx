"use client";
import Btn_learnMore from "@/src/components/B_learnMore";
import C_wNumber from "@/src/components/C_wNumber";
import Des from "@/src/components/Des";
import Container from "@/src/pages/Container";
import Metaverse from "@/src/pages/Metaverse";
import Vision from "@/src/pages/Vision";
import { scrollPercent } from "@/src/util/scrollPercent";
import EnterScene from "@/src/world/EnterScene";
import anime from "animejs/lib/anime.js";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		var scrollAnimation = anime({
			targets: "#box",
			translateY: [-100, 0],
			delay: 200,
		});
		const element = document.querySelector("#box");
		const intersectionObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						scrollAnimation.play();
					}
				});
			}
		);
		if (element != null) {
			console.log("element is loaded");
			intersectionObserver.observe(element);
		}
		return () => {
			if (element != null) {
				intersectionObserver.unobserve(element);
			}
		};
	}, []);
	return (
		<>
			<div className="min-h-screen">
				<Vision />
			</div>

			<div className=" min-h-screen bg-red-100 py-20 mx-auto " >
				<div className="flex flex-col sm:flex-row sm:px-14 justify-between text-left ">
					<div className="w-full sm:w-[900px]">
						<EnterScene />
					</div>
					<div className="bg-blue-100 mx-auto mt-10">
						<Des Title={"Metaverse"} Text={"make new world for metaverss"}></Des>
						<Btn_learnMore />
					</div>



				</div>

				<div className="divider" />
				<div className="flex flex-col sm:flex-row justify-center">
					<C_wNumber number="1" title="Ustory" text="학교 및 공공기관 홍보 공간 제작" />

					<C_wNumber number="2" title="zepeto" text="학교 및 공공기관 홍보 공간 제작" />

					<C_wNumber number="2" title="zep" text="학교 및 공공기관 홍보 공간 제작" />

				</div>

			</div>



			<div className=" min-h-screen">advertise

				<Des Title={"홍보공간의 재창조"} Text={"이쁘니가조아 "}></Des>



			</div>
		</>
	);
}
