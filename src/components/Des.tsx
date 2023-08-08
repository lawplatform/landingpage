interface DesProps {
	Title: String;
	Text: string;
}

export default function Des({ Title, Text }: DesProps) {
	return (
		<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
			<h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">{Title}</h2>
			<p className="mb-4">{Text}</p>
		</div>
	)
}
