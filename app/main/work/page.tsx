import Des from "@/src/components/Des";
import G_normal from "@/src/components/G_normal";
import T_1 from "@/src/components/T_1";
import T_1_dark from "@/src/components/T_1_dark";
import Conssul from "@/src/pages/Conssul";

export default function Home() {
	return (
		<>
			<div className=" min-h-screen">
				{/* 컨썰 */}

				<T_1 title={"컨썰"} text={"컨썰턴트와 썰을 풀다"}></T_1>
				<div className="md:flex items-center py-20">
					<div className="w-full md:w-1/2 mb-10 md:mb-0">
						<div className="w-ful bg-red-100">arst</div>
					</div>
					<div className="w-full md:w-1/2">

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
			<T_1 title={"Metaverse"} text={"메타버스에서 만나는 홍보공간 "}></T_1>
			<div className="min-h-screen bg-base-content">

				{/* 메타버스 */}
				<div className="mt-5 mx-20 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

					{/*갤러리 작업 */}
					<G_normal />
					<G_normal />
					<G_normal />
					<G_normal />
					<G_normal />
					<G_normal />
				</div>

			</div>
			<T_1 title={"Metaverse"} text={"전시적 홍보 솔루션  "}></T_1>
			<div className=" min-h-screen bg-base-100">
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
