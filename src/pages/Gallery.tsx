"use client";
import Image from "next/image"
import C_gallery from "../components/C_gallery"
import { useEffect, useState } from "react";
import anime from 'animejs/lib/anime.js';
export default function Gallery() {
	const [see, setSee] = useState(false);
	useEffect(() => {
		var scrollAnimation = anime({
			targets: ".photo",
			opacity: [0, 100],
			translateY: [0, 1],
			scale: [0.98, 1],
			delay: anime.stagger(100),
			easing: 'easeInOutQuart',
		});
		const element = document.querySelector("#gallery");
		const intersectionObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && element !== null) {
						scrollAnimation.play();
						intersectionObserver.unobserve(element);
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
		<div className="flex flex-col bg-red-500  auto-cols-auto ">
			<div className="flex flex-row photo">
				<C_gallery img={"bo"} title={"office"} text={"상담 및 교육이 가능한 zepeto 공간입니다"}></C_gallery>
				<C_gallery img={"prame8"} title={"office-prame"} text={"상담 및 교육이 가능한 youstory 공간입니다"}></C_gallery>
			</div>
			<video autoPlay muted loop className="w-full h-60 flex">
				<source src="/metaverse.mp4" type="video/mp4" />
			</video>
			<div className="flex flex-col sm:flex-row">
				<C_gallery img={"expo"} title={"expo"} text={"youstory를 통해 제공하는 전시용 공간입니다"}></C_gallery>
				<C_gallery img={"office_blue"} title={"office_blue"} text={"youstory를 통해 제공하는 사무실 공간입니다"}></C_gallery>
				<C_gallery img={"room"} title={"room-normal"} text={"zep을 통해 제공하는 집안 내부도입니다"}></C_gallery>
			</div>
			<div className="flex flex-col sm:flex-row" id="gallery">
				<C_gallery img={"bs4"} title={"백송고-진로상담실"} text={"youstroy를 통해 구현된 진로상담 공간입니다"}></C_gallery>
				<C_gallery img={"bs3"} title={"백송고-심화아카데미"} text={"youstory를 통해 구현된 심화 교육 아카데미 공간입니다"}></C_gallery>
				<C_gallery img={"bs2"} title={"백송고-STEAM 교육 전시"} text={"youstory를 통해 구현된 STEAM 교육 전시관 입니다"}></C_gallery>
			</div>
			<div>
				<C_gallery img={"bs"} title={"백송고"} text={"youstory를 통해 구현된 학교 홍보관 입니다"}></C_gallery>

				<C_gallery img={"ug-gallery"} title={"gallery"} text={"youstory의 기능을 둘러볼 수 있는 공간입니다"}></C_gallery>
				<C_gallery img={"bo"} title={"big room"} text={""}></C_gallery>

			</div>
		</div>


	)
}
