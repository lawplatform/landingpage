interface T_1Prop {
	title: string;
	text: string;
}
export default function T_1({ title, text }: T_1Prop) {
	return (
		<div className="mx-auto px-auto">
			<div className="flex items-center gap-12">
				<h2 className="mt-10 mx-auto text-2xl font-bold text-gray-800 lg:text-3xl">{title}</h2>

				<p className="mx-auto max-w-screen-sm text-gray-500 md:block mt-10">{text}</p>
			</div>
			<div className="divider"></div>
		</div>
	)
}
