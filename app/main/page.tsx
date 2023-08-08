'use client';
import Btn_learnMore from '@/src/components/B_learnMore';
import Metaverse from '@/src/pages/Metaverse';
import Vision from '@/src/pages/Vision';
import { scrollPercent } from '@/src/util/scrollPercent';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';

export default function Home() {

	useEffect(() => {
		console.log("initial lize");
		var scrollAnimation = anime({
			targets: '#box',
			translateY: 200,
			delay: 200,
		});
		const element = document.querySelector("#box")
		const intersectionObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log("did you see me? ");
					scrollAnimation.play();
					console.log("animation end");

				}
			});
		});
		if (element != null) {
			console.log("element is loaded");
			intersectionObserver.observe(element)


		}
		return () => {
			if (element != null) {
				intersectionObserver.unobserve(element);
			}
		}

	}, [])
	return (
		<>

			<div className="hero min-h-screen"><Vision /></div>
			<div className="hero min-h-screen"><Metaverse /></div>
			<div id="box" className="w-10 bg-red-100">hello</div>
			<div className="hero min-h-screen">advertise</div>
		</>
	)
}
