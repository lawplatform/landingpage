export default function Navbar() {

	return (
		<div className="navbar">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li><a>info</a></li>
					<li><a>work</a></li>
					<li><a>Contact</a></li>

				</ul>
			</div>
		</div>
	)
}
