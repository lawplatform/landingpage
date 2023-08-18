"use client";
import Link from "next/link"
import Image from "next/image"
import anime from 'animejs/lib/anime.js';
import { useEffect } from "react";
export default function Hero() {
	function wait(seconds: number): Promise<void> {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, seconds * 1000);
		});
	}
	var screenChange = anime.timeline({
		easing: "easeOutCubic",
		autoplay: false
	});
	screenChange
		.add({
			targets: "#cover_1",
			height: [0, 1920],
			duration: 300
		})
	screenChange.finished.then(function() {
		wait(5);
		window.open("https://law-landing.vercel.app/main", "_blank");

	});

	useEffect(() => {
		var scrollAnimation = anime({
			targets: '.logo',
			opacity: [0, 1],
			duration: 5000,
		});
		const element = document.querySelector('.logo');
		scrollAnimation.play();
	}, []);

	const clickEventHandler = async () => {
		console.log("am I click?");

		screenChange.play();


	}

	return (
		<div className="min-h-screen relative">

			<div className="background-video">
				<video autoPlay muted loop className="absolute">
					<source src="/main.mp4" type="video/mp4" />
					{/* Fallback content */}
				</video>
				<div className="absolute inset-0 bg-radial-gradient"></div>
				<div className="flex flex-col items-center justify-center h-full text-center text-white">
					<div className="absolute">
						<div className="flex flex-col justify-center" onClick={clickEventHandler}>
							<Link href={{ pathname: "/main" }}>
								<Image src="/logo/logo.png" alt="logo" width="300" height="200" className="transition-transform duration-300 ease-in-out transform hover:scale-110 logo " ></Image>
								<div className="mb-5 w-50 bg-low-dark">
									새로운  세상을 열다 </div>
							</Link>
						</div>
					</div>
				</div>
				<div id="cover_1" className="absolute bg-blue-400 w-full h-0 top-0 bottom-0"></div>
			</div>
		</div>
	)
}
