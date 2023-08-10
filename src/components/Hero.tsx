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
						<h1 className="mb-5 text-8xl font-bold ">LAWPLATFORM</h1>
						<p className="mb-5 bg-black ">
							Provident cupiditate voluptatem et in. </p>
						<p>Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
						<p className="mb-5">	In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<Link href={{ pathname: "/main" }}>
							<button className="btn btn-neutral">들어가기</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
