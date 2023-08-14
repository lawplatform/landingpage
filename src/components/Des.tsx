interface DesProps {
	Title: String;
	Text: string;
}

export default function Des({ Title, Text }: DesProps) {
	return (
		<div className="mx-auto text-center font-light text-gray-400 sm:text-lg dark:text-gray-400">

			<h1 id="title" className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-base-100 md:text-5xl lg:text-6xl  op">{Title}</h1>
			<p className="mb-4">{Text}</p>
		</div>
	)
}
