import Image from "next/image"
interface C_feat_v_prop {
	img: string;
	title: string;
	text: string;
}
export default function C_feat_v({ img, title, text }: C_feat_v_prop) {

	return (
		<div className="p-5 sm:p-10 bg-base-100 min-w-50 rounded-2xl border border-slate-300 mb-3 mx-10 op mt-2 justify-start">

			<div className="flex flex-row items-center mb-5">
				<Image src={"/icon/" + img + ".svg"} alt="hero image" objectFit="cover" objectPosition="center" width="40" height="40" className=" bg-white  mx-5" />


				<div className="flex flex-col">
					<h3 className="text-lg font-bold mb-2">
						{title}
					</h3>

					<p className="text-sm leading-6 text-base-content-30">
						{text}
					</p>
				</div>
			</div>
		</div>
	)
}
