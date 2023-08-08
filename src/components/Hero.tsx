import Link from "next/link"
import Image from "next/image"
export default function Hero() {
	return (
		<div className="hero min-h-screen">
			<Image src="/law.png" alt="hero image" objectFit="cover" objectPosition="center" width="1920" height="1200" />
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Lawplatform</h1>
					<p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					<Link href={{ pathname: "/main" }}>
						<button className="btn btn-neutral">들어가기</button></Link>
				</div>
			</div>
		</div>
	)
}
