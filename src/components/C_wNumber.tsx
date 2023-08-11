interface C_wNumberProps {
	number: string;
	title: string;
	text: string;
}

export default function C_wNumber({ number, title, text }: C_wNumberProps) {
	return (
		<div id="box" className="flex flex-col items-center justify-center mx-5 mt-5">
			<h1 className="text-3xl text-base-200">{title}</h1>
			<div className="mt-3 w-20 h-1 bg-white border-b-2 border-white"></div>
			<p className="mt-5 text-base-300">{text} </p>
		</div>
	)


}
