'use client'
import { useEffect } from "react";
import anime from 'animejs/lib/anime.js';
import C_wNumber from "../components/C_wNumber";
import Image from "next/image";
export default function Metaverse() {


	useEffect(() => {
		var Animation = anime({
			targets: '.des',
			translateX: [-10, 1],
			opacity: [0, 1],
			easing: 'easeInOutExpo',
			delay: anime.stagger(100)

		});
		const element = document.querySelector("#des")
		const intersectionObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && element !== null) {
					Animation.play();
					intersectionObserver.unobserve(element);

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
					<Image src={"/space/office.png"} alt={"school"} width="400" height="300"></Image>
				</div>
				<div className="mx-10 w-xl  ">

					<div className="flex flex-col  justify-start mx-2 mt-10 text-center pb-36 des">
						<h1 className="text-3xl text-base-200 text-start">{"가상 공간 제작"}</h1>
						<div className="mt-3 w-20 h-1 bg-white border-b-2 border-white"></div>
						<p className="mt-5 text-base-300">{"메타버스 플랫폼을 통한 가상 공간 제작"} </p>
					</div>

				</div>
			</div>

			<div className="flex flex-col sm:flex-row text-white justify-center px-10">
				<div className=" rounded-lg des">
					<Image src={"/space/lawgallery.png"} alt={"school"} width="400" height="300"></Image>
				</div>
				<div className="mx-10 w-xl  ">

					<div className="flex flex-col  justify-start mx-2 mt-10 text-center pb-36 des">
						<h1 className="text-3xl text-base-200 text-start">{"다양한 플랫폼 기반 제작"}</h1>
						<div className="mt-3 w-20 h-1 bg-white border-b-2 border-white"></div>
						<p className="mt-5 text-base-300">{"youstory, zepeto, zep, roblox 기반 공간 제작 "} </p>
					</div>


				</div>
			</div>

			<div className="flex flex-col sm:flex-row text-white justify-center px-10 ">
				<div className="des rounded-lg">
					<Image src={"/space/party.jpg"} alt={"school"} width="400" height="300"></Image>
				</div>
				<div className="mx-10  w-xl">


					<div className="flex flex-col  justify-start mx-2 mt-10 text-center pb-36 des">
						<h1 className="text-3xl text-base-200 text-start">{"커뮤니티 구축"}</h1>
						<div className="mt-3 w-20 h-1 bg-white border-b-2 border-white"></div>
						<p className="mt-5 text-base-300">{"상담, 모임, 홍보, 교육등 다양한 콘텐츠 공간 개발 "} </p>
					</div>



				</div>
			</div>

		</div >

	)
}

