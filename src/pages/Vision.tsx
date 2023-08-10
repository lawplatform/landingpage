import Image from "next/image"
import Des from "../components/Des"
import DesWIcon from "../components/DesWIcon"
import { useEffect } from "react";
import anime from 'animejs/lib/anime.js';
import C_feat from "../components/C_feat";

export default function Vision() {


	useEffect(() => {
		var scrollAnimation = anime({
			targets: '.op',
			translateX: [-40, 0],
			opacity: [0, 1],
			easing: 'easeInOutExpo',
			delay: anime.stagger(100)
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
			<div className="mx-auto items-center justify-center flex flex-col lg:flex-row mb-3 px-2 lg:px-10">
				<div className="flex flex-col items-center w-2/3">
					<div className="flex items-center justify-center">
						<Image src="/temp/temp.png" alt="hero image" objectFit="cover" objectPosition="center" width="500" height="500" className="op mb-5" />
					</div>
					<h1 id="title" className="mt-12 mb-5 text-5xl font-bold op">vison</h1>

					<div className="w-20 px-24">
						<p className=" py-6 mb-20  op">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa </p>

					</div>
				</div>
				<div className="mt-10 mb-10 md:flex">
					<C_feat title="연결" desc="고객과의 연결" img="temp" />
					<C_feat title="소통" desc="고객과의 연결" img="temp" />
					<C_feat title="확장" desc="고객과의 연결" img="temp" />
				</div>
			</div >
		</>
	)
}

