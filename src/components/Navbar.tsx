import Link from "next/link";

export default function Navbar() {

	return (
		<div className="navbar">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">LOGO</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>	<Link href={{ pathname: "/main" }}>	INFO</Link></li>
					<li>	<Link href={{ pathname: "/main/work" }}>	WORK</Link></li>
					<li>	<Link href={{ pathname: "/main/contact" }}>	CONTACT</Link></li>

				</ul>
			</div>
		</div>
	)
}
