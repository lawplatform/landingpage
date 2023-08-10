import Des from "@/src/components/Des";
import G_normal from "@/src/components/G_normal";
import Conssul from "@/src/pages/Conssul";

export default function Home() {
	return (
		<>
			<div className=" min-h-screen bg-red-100">
				{/* 컨썰 */}

				<div className="md:flex items-center py-20">
					<div className="w-full md:w-1/2 mb-10 md:mb-0">
						<div className="w-ful bg-red-100">arst</div>
					</div>
					<div className="w-full md:w-1/2">
						<Des Title={"컨썰"} Text={"컨썰턴트와 썰을 풀다"}></Des>

						<ul>
							<li>메타버스 공간을 활용한 중계 플랫폼 서비스</li>
							<li>메타버스를 통한 경험과 지식을 나눌수 있는 가상의 공간 제공</li>
							<li>자료 관리를 위한 자료실</li>
							<li> 유연한 스케줄링 제공</li>
						</ul>
						<button className="btn btn-neutral mt-5">방문하기 </button>
					</div>
					{/* 컨썰 */}

				</div>
			</div>
			<div className="min-h-screen bg-white">

				{/* 메타버스 */}
				<div className="mx-auto px-auto">

					<div className="flex items-center gap-12">
						<h2 className="mt-10 mx-auto text-2xl font-bold text-gray-800 lg:text-3xl">Gallery</h2>

						<p className="mx-auto max-w-screen-sm text-gray-500 md:block mt-10">This is a section of some simple filler text,
							also known as placeholder text. It shares some characteristics of a real written text.</p>
					</div>
				</div>
				<div className="divider"></div>
				<div className="mt-5 mx-20 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

					{/*갤러리 작업 */}
					<G_normal />
				</div>

			</div>
			<div className=" min-h-screen bg-dark-blue">
				{/* 상담 봇 서비스   */}

				<div> hello I'm cyber avatar.. :) </div>
				{/* 상담 봇 서비스   */}
			</div>
			<div className=" min-h-screen bg-white">

				{/* 기타 */}

			</div>
		</>
	);
}
