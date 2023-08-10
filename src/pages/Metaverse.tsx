import { useEffect } from "react";
import Btn_learnMore from "../components/B_learnMore";
import EnterScene from "../world/EnterScene";
import anime from 'animejs/lib/anime.js';
import C_feat from "../components/C_feat";


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
		<div className="min-w-screen bg-base-200 flex items-center p-5 lg:p-10 overflow-hidden relative ">
			<div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
				<div className="md:flex items-center -mx-10">
					<div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
						<div className="relative">
							<div className="w-[699px] bg-red-100 op">
								<EnterScene />
							</div>




						</div>
					</div>
					<div className="w-full md:w-1/2 px-10">
						<div className="mb-10">
							<h1 className="op font-bold uppercase text-2xl mb-5 text-black"> Metaverse</h1>
							<p className="op text-md ">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blandi</p>
							<Btn_learnMore />
						</div>

					</div>
				</div>
			</div>
		</div >
	)
}

