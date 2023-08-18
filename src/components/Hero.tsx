"use client";
import Link from "next/link"
import Image from "next/image"
import anime from 'animejs/lib/anime.js';
import { useEffect, useState } from "react";
export default function Hero() {



	useEffect(() => {
		const scrollAnimation = anime({
			targets: '.logo',
			opacity: [0, 1],
			duration: 5000,
		});
		const element = document.querySelector('.logo');
		scrollAnimation.play();
	}, []);




	return (
		<div className="min-h-screen relative">


			<div className="background-video">
				<video autoPlay muted loop className="absolute">
					<source src="/main.mp4" type="video/mp4" />
					{/* Fallback content */}
				</video>
				<div className="absolute inset-0 bg-radial-gradient"></div>
				<div id="container" className="flex flex-col items-center justify-center h-full text-center text-white z-40">
					<div className="absolute">
						<div className="flex flex-col justify-center" >
							<Link href={{ pathname: "/main" }}>
								<Image src="/logo/logo.png" alt="logo" width="300" height="200" className="Z-50 transition-transform duration-300 ease-in-out transform hover:scale-110 logo "

								></Image>
								<div className="mb-5 w-50 bg-low-dark">
									새로운  세상을 열다 </div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
