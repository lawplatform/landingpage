import Image from "next/image"

interface C_featProp {
	title: string;
	img: string;
	desc: string;
}
export default function C_feat({ title, img, desc }: C_featProp) {
	return (
		<div className="p-10 bg-base-100 w-56 rounded-lg border border-slate-300 mb-3 mx-10 op mt-10">

			<div className="flex items-center justify-center mb-5">
				<Image src={"/icon/" + img + ".svg"} alt="hero image" objectFit="cover" objectPosition="center" width="40" height="40" className="op bg-white  transition-transform transform hover:scale-120" />

			</div>

			<h3 className="text-lg font-bold mb-2">
				{title}
			</h3>

			<p className="text-sm leading-6 text-base-content-30">
				{desc}			</p>

		</div>)
}
