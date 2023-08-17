import Des from "../components/Des";
import Image from "next/image"
export default function Conssul() {
	return (
		<div className="md:flex">
			<div className="w-full md:w-1/2 mb-1 md:mb-0  flex items-center justify-center">
				<Image src="/logo/conssul.png" alt={"logo"} width="400" height="500"></Image>
			</div>
			<div className="w-full md:w-1/2 justify-start text-center sm:text-start">
				<div className="mx-auto text-center font-light text-gray-400 sm:text-lg dark:text-gray-400">

					<h1 id="title" className="mt-1 mb-5 text-4xl font-extrabold tracking-tight leading-none text-base-100 md:text-5xl lg:text-6xl  op">"컨썰"</h1>
					<p className="mb-4 text-center sm:text-start">"세상의 모든 컨설던트"</p>
				</div>
				<p>메타버스 공간을 활용한 상담 플랫폼 서비스</p>
				<button className="btn btn-neutral mt-5 mb-5" onClick={() => window.location.href = "http://conssul.kr/ "}>방문하기</button>
			</div>
		</div >







	)

}
