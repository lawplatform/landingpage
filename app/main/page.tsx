"use client";
import Btn_learnMore from "@/src/components/B_learnMore";
import C_wNumber from "@/src/components/C_wNumber";
import Des from "@/src/components/Des";
import Vision from "@/src/pages/Vision";
import EnterScene from "@/src/world/EnterScene";
import anime from "animejs/lib/anime.js";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Image from "next/image"
import Timeline from "@/src/pages/Timeline";

export default function Home() {
	useEffect(() => {
		themeChange(false);
		var scrollAnimation = anime({
			targets: ".op",
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
				<div className="flex flex-col sm:flex-row sm:px-14 justify-center text-center ">
					<div className="w-full min-w-full sm:w-[900px] ">
						<Des Title={"Metaverse"} Text={"메타버스를 활용한 홍보공간"} />
						<EnterScene />
						<Btn_learnMore />
						<div className="divider mt-10"></div>
						<div className="flex flex-col sm:flex-row text-white justify-center px-10">
							<div className=" rounded-lg op">
								<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>
							</div>
							<div className="mx-10 w-xl ">		<C_wNumber
								number="1"
								title="메타버스 공간 제작"
								text="메타버스를 통해 다양한 고객들을 만나보세요"

							/></div>
						</div>

						<div className="flex flex-col-reverse sm:flex-row text-white justify-center px-10 mt-20">
							<div className="mx-10   w-xl">		<C_wNumber
								number="1"
								title="다양한 플랫폼 지원"
								text="ustory zepeto zep을 이용한 홍보공간 제작 "

							/></div>
							<div className="op rounded-lg">
								<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>
							</div>


						</div>

						<div className="flex flex-col sm:flex-row text-white justify-center px-10 mt-20">
							<div className="op rounded-lg">
								<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>
							</div>
							<div className="mx-10  w-xl">		<C_wNumber
								number="1"
								title="커뮤니티 구축"
								text="상담, 모임, 홍보, 교육등 다양한 콘텐츠 공간 개발"

							/></div>
						</div>


					</div>
				</div>
			</div>
			<h1 id="title" className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-accent-content md:text-5xl lg:text-6xl  op">History</h1>
			<div className="divider"></div>
			<div className=" min-h-screen mt-5  px-10 py-10 rounded-lg mb-5 max-w-[700px] mx-auto">
				<div className="mx-auto text-center font-light sm:text-lg dark:text-gray-400"></div>
				<Timeline />
			</div>
		</>
	);
}
