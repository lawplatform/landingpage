"use client";
import Btn_learnMore from "@/src/components/B_learnMore";
import C_wNumber from "@/src/components/C_wNumber";
import Des from "@/src/components/Des";
import Container from "@/src/pages/Container";
import Metaverse from "@/src/pages/Metaverse";
import Vision from "@/src/pages/Vision";
import ThemeChange from "@/src/util/ThemeChange";
import { scrollPercent } from "@/src/util/scrollPercent";
import EnterScene from "@/src/world/EnterScene";
import anime from "animejs/lib/anime.js";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Home() {
	useEffect(() => {
		themeChange(false);
		var scrollAnimation = anime({
			targets: "#box",
			translateY: [100, 0],
			delay: anime.stagger(100),
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

			<div className="min-h-screen  py-20 mx-auto bg-base-content">
				<div className="flex flex-col sm:flex-row sm:px-14 justify-between text-left ">
					<div className="w-full min-w-full sm:w-[900px]">
						<Des Title={"Metaverse"} Text={"make new world for metaverss"} />
						<EnterScene />
						<Btn_learnMore />
					</div>
				</div>

				<div className="divider" />
				<div className="flex flex-col sm:flex-row justify-center">
					<C_wNumber
						number="1"
						title="Ustory"
						text="학교 및 공공기관 홍보 공간 제작"
					/>
					<C_wNumber
						number="2"
						title="zepeto"
						text="학교 및 공공기관 홍보 공간 제작"
					/>
					<C_wNumber
						number="2"
						title="zep"
						text="학교 및 공공기관 홍보 공간 제작"
					/>
				</div>
			</div>

			<div className=" min-h-screen mt-5">
				advertiserst
				<Des Title={"홍보공간의 재창조"} Text={"어떤 좋은 말"} />
			</div>
		</>
	);
}
