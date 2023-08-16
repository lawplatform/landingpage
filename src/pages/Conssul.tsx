import Des from "../components/Des";
import Image from "next/image"
export default function Conssul() {
	return (
		<div className="md:flex items-center">
			<div className="w-full md:w-1/2 mb-10 md:mb-0">
				<div className="w-ful bg-red-100">
					<div className="avatar">
						<div className="w-24 rounded-full">
							<img src="/temp/person.jpg" />
						</div>
					</div>

					<div className="avatar fixed top-5">
						<div className="w-24 rounded-full">
							<img src="/temp/person.jpg" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 ">
				<Des Title={"컨썰"} Text={"세상의 모든 컨설턴트"}></Des>
				<p>메타버스 공간을 활용한 상담 플랫폼 서비스</p>
				<button className="btn btn-neutral mt-5 mb-5">방문하기 </button>
			</div>
		</div>







	)

}
