
import Image from 'next/image'

interface A_circleP {
	img: string;
}

export default function A_circle({ img }: A_circleP) {
	return (
		<div className="avatar">
			<div className="w-24 mask mask-squircle">
				<Image src={img} alt={'avatar'} />
			</div>
		</div>
	)
}
