"use client";
import Link from "next/link"
import Image from "next/image"
import anime from 'animejs/lib/anime.js';
import { useEffect } from "react";
export default function Hero() {

	useEffect(() => {
		var scrollAnimation = anime({
			targets: '.logo',
			translateY: [200, 0],
			delay: anime.stagger(100),
		});
		const element = document.querySelector('.logo');
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
		<div className="min-h-screen relative">
			<div className="background-video">
				<video autoPlay muted loop>
					<source src="/main.mp4" type="video/mp4" />
					{/* Fallback content */}
				</video>
				<div className="absolute inset-0 bg-radial-gradient"></div>
				<div className="flex flex-col items-center justify-center h-full text-center text-white">
					<div className="absolute">
						<div className="flex flex-col justify-center">
							<Link href={{ pathname: "/main" }}>
								<Image src="/logo/logo.png" alt="logo" width="300" height="200" className="transition-transform duration-300 ease-in-out transform hover:scale-110 logo " ></Image>
							</Link>
							<div className="mb-5 w-50 bg-low-dark">
								새로운  세상을 열다 </div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}
