import Link from "next/link";
import Image from "next/image"
export default function Navbar() {

	return (
		<div className="navbar">
			<div className="flex-1 mt-3">
				<Link href="/main">

					<Image src={"/logo/logo.png"} width="100" height="80" alt={""}></Image>
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>	<Link href={{ pathname: "/main" }}>	ABOUT</Link></li>
					<li>	<Link href={{ pathname: "/main/work" }}>	WORK</Link></li>
					<li>	<Link href={{ pathname: "/main/contact" }}>	CONTACT</Link></li>

				</ul>
			</div>
		</div >
	)
}
