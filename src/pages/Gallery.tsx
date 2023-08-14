import Image from "next/image"
export default function Gallery() {

	return (
		<div className=" mx-auto px-5 py-2 lg:px-32 lg:pt-24 bg-red-100 flex ">
			<div className="-m-1 flex flex-wrap md:-m-2">
				<div className="flex w-1/2 flex-wrap">
					<div className="w-1/2 p-1 md:p-2">

						<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>

					</div>
					<div className="w-1/2 p-1 md:p-2">


						<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>

					</div>
					<div className="w-full p-1 md:p-2">

						<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>

					</div>
				</div>
				<div className="flex w-1/2 flex-wrap">
					<div className="w-full p-1 md:p-2">

						<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>

					</div>
					<div className="w-1/2 p-1 md:p-2">
						<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>				</div>
					<div className="w-1/2 p-1 md:p-2">
						<Image src={"/space/academy.png"} alt={"school"} width="400" height="300"></Image>



					</div>
				</div>
			</div>
		</div>

	)
}
