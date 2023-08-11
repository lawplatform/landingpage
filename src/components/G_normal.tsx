interface G_normalprop {
	img: string;
	name: string;
	type: string;

}
export default function G_normal({ img, name, type }: G_normalprop) {

	return (
		<>
			<div
				className="group relative flex h-28 items-end overflow-hidden rounded-2xl bg-gray-100 shadow-lg md:h-80">
				<img src={"/space/" + "academy." + "png"} loading="lazy" alt="metaverse room" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
				<div
					className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
				</div>
				<div className="relative bottom-5 left-3 badge badge-accent-content px-3 py-3">
					youstory
				</div>
				<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{name}</span>
			</div>
		</>
	)

}
