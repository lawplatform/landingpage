import Link from "next/link"
import Image from "next/image"
export default function Hero() {
	return (
		<div className="min-h-screen relative">
			<div className="background-video">
				<video autoPlay muted loop>
					<source src="/main.mp4" type="video/mp4" />
					{/* Fallback content */}
				</video>
				<div className="absolute inset-0 bg-radial-gradient"></div>
				<div className="flex flex-col items-center justify-center h-full text-center text-white">
					<div className="absolute">
						<div className="flex flex-col justify-center">
							<Image src="/logo/logo.png" alt="logo" width="300" height="200" className="transition-transform duration-300 ease-in-out transform hover:scale-110"></Image>
							<div className="mb-5 w-50 bg-low-dark">
								새로운  세상을 열다 </div>
							<Link href={{ pathname: "/main" }}>
								<button className="btn btn-neutral">들어가기</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
