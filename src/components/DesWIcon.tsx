import Image from 'next/image';
interface DesWIconProps {
	Img: string;
	Title: string;
	Text: string;
}

export default function DesWIcon({ Img, Title, Text }: DesWIconProps) {
	return (
		<div className="flex flex-col justify-center w-52 bg-blue-100 items-center mb-4  h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
			<Image src={"/icon/cart.png"} width="20" height="20" alt="icon"></Image>
			<h3 className="mb-2 text-xl font-bold dark:text-white">{Title}</h3>
			<p className="text-gray-500 dark:text-gray-400">{Text}</p>
		</div>
	)

}
