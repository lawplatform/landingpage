import Image from "next/image"
import C_gallery from "../components/C_gallery"
export default function Gallery() {

	return (
		<div className="flex flex-col bg-red-500  auto-cols-auto ">
			<video autoPlay muted loop controls className="w-96 h-60 flex">
				<source src="/metaverse.mp4" type="video/mp4" />
			</video>
			<div className="flex flex-row">
				<C_gallery img={"bo"} title={"office"}></C_gallery>
				<C_gallery img={"bo"} title={"office_blue"}></C_gallery>
				<C_gallery img={"bo"} title={"gallery"}></C_gallery>
			</div>
			<div>
				<C_gallery img={"bo"} title={"academy"}></C_gallery>
				<C_gallery img={"bo"} title={"expocenter"}></C_gallery>
				<C_gallery img={"bo"} title={"small room"}></C_gallery>
			</div>
			<div>
				<C_gallery img={"bo"} title={"big room"}></C_gallery>
				<C_gallery img={"bo"} title={"big room"}></C_gallery>
				<C_gallery img={"bo"} title={"big room"}></C_gallery>

			</div>
		</div>


	)
}
