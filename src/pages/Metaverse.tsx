import { useEffect } from "react";
import anime from 'animejs/lib/anime.js';
import C_wNumber from "../components/C_wNumber";
import Image from "next/image";
export default function Metaverse() {


	useEffect(() => {
		var scrollAnimation = anime({
			targets: '.des',
			translateX: [-10, 1],
			opacity: [0, 1],
			easing: 'easeInOutExpo',
			delay: anime.stagger(100)

		});
		const element = document.querySelector("#des")
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
		<div id="des">
			<div className="flex flex-col sm:flex-row text-white justify-center px-10">
				<div className=" rounded-lg des">
					<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>
				</div>
				<div className="mx-10 w-xl  ">
					<C_wNumber
						number="1"
						title="메타버스 공간 제작"
						text="메타버스를 통해 다양한 고객들을 만나보세요"

					/></div>
			</div>

			<div className="flex flex-col-reverse sm:flex-row text-white justify-center px-10 mt-20">
				<div className="mx-10   w-xl">
					<C_wNumber
						number="1"
						title="다양한 플랫폼 지원"
						text="ustory zepeto zep을 이용한 홍보공간 제작 "
					/></div>
				<div className="des rounded-lg">
					<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>
				</div>


			</div>

			<div className="flex flex-col sm:flex-row text-white justify-center px-10 mt-20">
				<div className="des rounded-lg">
					<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>
				</div>
				<div className="mx-10  w-xl">
					<C_wNumber
						number="1"
						title="커뮤니티 구축"
						text="상담, 모임, 홍보, 교육등 다양한 콘텐츠 공간 개발"

					/>

				</div>
			</div>

		</div>

	)
}

