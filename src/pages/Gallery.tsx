"use client";
import Image from "next/image"
import C_gallery from "../components/C_gallery"
import { useEffect } from "react";
import anime from 'animejs/lib/anime.js';

export default function Gallery() {
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
		<div className="flex flex-col bg-red-500  auto-cols-auto ">
			<div className="flex flex-row photo">
				<C_gallery img={"bo"} title={"office"}></C_gallery>
				<C_gallery img={"bo"} title={"gallery"}></C_gallery>
			</div>
			<video autoPlay muted loop controls className="w-96 h-60 flex">
				<source src="/metaverse.mp4" type="video/mp4" />
			</video>
			<div className="flex flex-col sm:flex-row">
				<C_gallery img={"bo"} title={"office"}></C_gallery>
				<C_gallery img={"bo"} title={"office_blue"}></C_gallery>
				<C_gallery img={"bo"} title={"gallery"}></C_gallery>
			</div>
			<div className="flex flex-col sm:flex-row" id="gallery">
				<C_gallery img={"bo"} title={"academy"}></C_gallery>
				<C_gallery img={"bo"} title={"expocenter"}></C_gallery>
				<C_gallery img={"bo"} title={"small room"}></C_gallery>
			</div>
			<div>
				<C_gallery img={"bo"} title={"big room"}></C_gallery>
				<C_gallery img={"bo"} title={"big room"}></C_gallery>
				<C_gallery img={"bo"} title={"big room"}></C_gallery>

			</div>
		</div>


	)
}
