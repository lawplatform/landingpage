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
		const element = document.querySelector('.op')
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
		<>
			<div className="mx-auto items-center justify-center flex flex-col lg:flex-row mb-3 px-2 lg:px-10">
				<div className="flex flex-col items-center w-2/3">
					<div className="flex items-center justify-center">
						<Image src={"/temp/world.svg"} width="100" height="80" alt={""}></Image>
					</div>
					<h1 id="title" className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-primary-content-900 md:text-5xl lg:text-6xl dark:text-whiteop">VISION</h1>

					<div className=" px-24">
						<p className=" py-6 mb-20  op">제약을 뛰어넘는 혁신과 성장을 실현합니다 </p>

					</div>
				</div>
				<div className="mt-10 mb-10 md:flex">
					<C_feat title="혁신" desc="새로운 경험과 기술을 탐구하여 끊임없이 발전" img="temp" />
					<C_feat title="다양성" desc="다양성 있는 환경 상호작용을 촉진하며, 포용적인 문화 구축" img="temp" />
					<C_feat title="신뢰" desc="사용자들과 협력 파트너들과의 소통을 통해 신뢰를 구축하고, 공정한 관리와 운영을 지향" img="temp" />
				</div>
			</div >
		</>
	)
}

