import Image from "next/image"
interface L_timelineProp {
	day: string;
	title: string;
	text: string;
	img: string;
}
export default function L_timeline({ day, title, text, img }: L_timelineProp) {
	return (

		<li>
			<div className="flex-start flex items-center pt-2">
				<div
					className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
				<p className="text-sm text-neutral-500 font-extrabold dark:text-neutral-300">
					{day}
				</p>
			</div>
			<div className="border-dashed  border-l-4">
				<div className=" flex flex-col mb-6 ml-4 mt-2 items-center justify-center foot ">
					<Image src={"/history/" + img + ".png"} alt={"school"} width="200" height="200"></Image>
					<h4 className="mb-1.5 text-xl font-semibold">{title}</h4>
					<p className="mb-3 text-neutral-500 dark:text-neutral-300">{text}</p>
				</div>
			</div>
		</li>
	)
}
