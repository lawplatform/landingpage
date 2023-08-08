interface DesWIconProps {
	Img: string;
	Title: string;
	Text: string;
}

export default function DesWIcon({ Img, Title, Text }: DesWIconProps) {
	return (
		<div>
			<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
				<img src={Img} /></div>
			<h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
			<p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
		</div>
	)

}
