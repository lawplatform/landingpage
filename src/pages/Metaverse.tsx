import { useEffect } from "react";
import Btn_learnMore from "../components/B_learnMore";
import EnterScene from "../world/EnterScene";
import anime from 'animejs/lib/anime.js';
import C_feat from "../components/C_feat";
import Des from "../components/Des";
export default function Metaverse() {


	useEffect(() => {
		var scrollAnimation = anime({
			targets: '.op',
			translateX: [-10, 1],
			opacity: [0, 1],
			easing: 'easeInOutExpo',
			delay: anime.stagger(100)

		});
		const element = document.querySelector("#box")
		const intersectionObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					scrollAnimation.play();

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
		<div className=" min-h-screen bg-red-100 py-20 mx-auto w-full" >
			<div className="flex flex-col sm:flex-row w-full sm:px-14 justify-between text-left ">
				<EnterScene />
				<div className="bg-blue-100 mx-auto">
					<Des Title={"Metaverse"} Text={"I like you"}></Des>
				</div>

			</div>
		</div>
	)
}

