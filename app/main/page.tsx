"use client";
import Btn_learnMore from "@/src/components/B_learnMore";
import Des from "@/src/components/Des";
import Vision from "@/src/pages/Vision";
import EnterScene from "@/src/world/EnterScene";
import anime from "animejs/lib/anime.js";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Timeline from "@/src/pages/Timeline";
import Metaverse from "@/src/pages/Metaverse_t";
import C_wNumber from "@/src/components/C_wNumber";
import Image from "next/image";
import KaKaoMap from "@/src/components/KaKaoMap";
import C_feat from "@/src/components/C_feat";
import SceneContainer from "@/src/world/SceneContainer";
import City from "@/src/world/scene/City";
import Logo from "@/src/world/scene/Logo";

export default function Home() {
	const [see, setSee] = useState(false);
	useEffect(() => {

		var scrollAnimation = anime({
			targets: '.c_feat',
			translateY: [-40, 0],
			opacity: [0, 1],
			easing: 'easeInOutExpo',
			delay: anime.stagger(100)
		});
		scrollAnimation.play();



		themeChange(false);
		var scrollAnimation = anime({
			targets: ".op",
			opacity: [0, 100],
			delay: anime.stagger(100),
			easing: "easeInOutSine",
		});
		const element = document.querySelector("#box");
		const intersectionObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && see != true) {
						setSee(true);
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

				<div className="mx-auto items-center justify-center flex flex-col lg:flex-row mb-3 px-2 lg:px-10">
					<div className="flex flex-col items-center w-2/3">
						<div className="flex items-center justify-center mt-5">
							<Image src={"/world.svg"} width="300" height="20" alt={""}></Image>
						</div>
						<h1 id="title" className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-primary-content-900 md:text-5xl lg:text-6xl dark:text-whiteop">VISION</h1>

						<div className=" sm:px-24 w-full">
							<p className=" py-2 mb-20  op">제약을 넘는 새로운 세상을 창조합니다 </p>

						</div>

						<div className=" mb-10 md:flex">
							<C_feat title="혁신" desc="새로운 경험과 기술을 추구하여 끊임없이 발전" img="evolve" />
							<C_feat title="다양성" desc="상호작용을 촉진하여, 포용적인 문화 구축" img="variation" />
							<C_feat title="신뢰" desc="소통을 통한 신뢰 구축, 공정한 관리와 운영을 지향" img="sheild" />
						</div>
					</div>
				</div >

			</div>

			<div className="min-h-screen  py-20 mx-auto bg-base-content">
				<div className="flex flex-col sm:flex-row sm:px-14 justify-center text-center ">
					<div className="w-full min-w-full sm:w-[900px] ">
						<Des Title={"Metaverse"} Text={"3d를 활용한 홍보공간 제작"} />
						<SceneContainer>
							<Logo></Logo>
							<City></City>
						</SceneContainer>
						<Btn_learnMore />
						<div className="divider mt-10"></div>
						<Metaverse />
					</div>
				</div>



			</div>

			<h1
				id="title"
				className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-accent-content md:text-5xl lg:text-6xl  op"
			>History
			</h1>
			<div className="divider"></div>
			<div className=" min-h-screen mt-5  px-10 py-10 rounded-lg mb-5 max-w-[700px] mx-auto">
				<div className="mx-auto text-center font-light sm:text-lg dark:text-gray-400"></div>
				<Timeline />
			</div>

			<div className="mx-auto bg-base-content">
				<div className="py-10">
					<Des Title={"Location"} Text={"찾아오시는 길"} />
					<KaKaoMap />
					<p className="text-sm leading-6 text-base-content-30 mt-5 mb-5">
						경기 고양시 일산동구 장백로 204 보람빌딩 302-303호
					</p>
				</div>
			</div>
		</>
	);
}
