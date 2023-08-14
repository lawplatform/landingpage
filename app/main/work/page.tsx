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
				<Conssul></Conssul>
				<div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-4">

					<C_feat_v img={"temp"} title={"메타버스 공간 상담 플랫폼"} text={"홍보에 필요한 메타버스 공간 제작"} />
					<C_feat_v img={"temp"} title={"자료실 기능"} text={"자료 관리를 위한 자료실 제공"} />
					<C_feat_v img={"temp"} title={"상담사를 위한 일정관리 "} text={"30분 단위로 유연한 스케줄 관리"} />
					<C_feat_v img={"temp"} title={"통합 컨설팅 솔루션"} text={"입시, 법률, 세무.. 모든 상담 관리"} />
					<C_feat_v img={"temp"} title={"수수료 무료"} text={"상담사를 위한 수수료 무료 서비스"} />
					<C_feat_v img={"temp"} title={"다양한 공간 제공"} text={"36가지 youstory 기본 테마 제공"} />
				</div>

				{/* 컨썰 */}

			</div>
			<T_1 title={"Metaverse"} text={"메타버스에서 만나는 홍보공간 "}></T_1>
			<div className="min-h-screen ">

				{/* 메타버스 */}
				<div className="mt-5 mx-5 sm:mx-20 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8 py-10">

					{/*갤러리 작업 */}

					<Gallery></Gallery>

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
