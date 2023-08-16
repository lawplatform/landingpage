import { useEffect } from "react";
import L_timeline from "../components/L_timeline";
import anime from 'animejs/lib/anime.js';


export default function Timeline() {
	useEffect(() => {
		var scrollAnimation = anime({
			targets: '.foot',
			translateX: [-40, 0],
			opacity: [0, 1],
			easing: 'easeInOutExpo',
			delay: anime.stagger(100)
		});
		const element = document.querySelector('.foot')
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

		<ol className="border-l border-neutral-300 dark:border-neutral-500">
			{/* timeline */}

			<L_timeline day={"2023.1.1"} title={"로플랫폼"} text={"회사 설립"} img={"law"}></L_timeline>
			<L_timeline day={"2023.3.2"} title={"youstory 공식 파트너십 "} text={"메타버스 플랫폼 youstory와 공식 파트너십 체결 및 업무 협조 "} img={"us"}></L_timeline>

			<L_timeline day={"2023.6.3"} title={"백송고등학교 업무 협약 "} text={"메타버스 플랫폼 youstory를 이용한 학교 홍보공간 제작 "} img={"bs"}></L_timeline>
		</ol>
	)
}
