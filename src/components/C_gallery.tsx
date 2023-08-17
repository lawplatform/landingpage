interface C_galleryProp {
	img: string;
	title: string;
	text: string;
}
export default function C_gallery({ img, title, text }: C_galleryProp) {
	return (
		<div className="group relative w-full cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 photo">
			<div className="h-96">
				<img
					className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
					src={"/gallery/" + img + ".png"}
					alt=""
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
			<div className="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0  py-20">
				<h1 className="font-dmserif text-3xl font-bold text-white top-52 ">{title}</h1>
				<p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					{text}
				</p>
				{/*
				<button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
					더 알아보기
				</button>
				*/}
			</div>
		</div>
	);
}
