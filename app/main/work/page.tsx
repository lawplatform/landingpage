import C_feat_v from "@/src/components/C_feat_v";
import Des from "@/src/components/Des";
import G_normal from "@/src/components/G_normal";
import T_1 from "@/src/components/T_1";
import T_1_dark from "@/src/components/T_1_dark";
import Conssul from "@/src/pages/Conssul";
import Gallery from "@/src/pages/Gallery";
import Gallery_dy from "@/src/pages/Gallery_dy";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className=" min-h-screen px-2 sm:px-20">
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
						<Link href="http://conssul.kr">
							<button className="btn btn-neutral mt-5">방문하기 </button>
						</Link>
					</div>
				</div>
				<div className="mx-auto grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-4">

					<C_feat_v img={"temp"} title={"기능1"} text={"장점2"} />
					<C_feat_v img={"temp"} title={"기능1"} text={"장점2"} />
					<C_feat_v img={"temp"} title={"기능1"} text={"장점2"} />
					<C_feat_v img={"temp"} title={"기능1"} text={"장점2"} />
					<C_feat_v img={"temp"} title={"기능1"} text={"장점2"} />
					<C_feat_v img={"temp"} title={"기능1"} text={"장점2"} />
				</div>

				{/* 컨썰 */}

			</div>
			<T_1 title={"Metaverse"} text={"메타버스에서 만나는 홍보공간 "}></T_1>
			<div className="min-h-screen ">

				{/* 메타버스 */}
				<div className="mt-5 mx-5 sm:mx-20 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8 py-10">

					{/*갤러리 작업 */}

				</div>

			</div>
			<T_1 title={"etc"} text={"전시적 홍보 솔루션  "}></T_1>
			<div className=" min-h-screen bg-base-100">
				{/* 상담 봇 서비스   */}

				<div> hello Im cyber avatar.. :) </div>
				{/* 상담 봇 서비스   */}
			</div>
			<div className=" min-h-screen bg-white">

				{/* 기타 */}

			</div>
		</>
	);
}
