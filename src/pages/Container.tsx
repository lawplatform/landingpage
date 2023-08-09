import C_feat from "../components/C_feat";

export default function Container() {
	return (
		<div className="hero-content w-full md:w-1/2 max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto  ">
			<div className="md:flex items-center">
				<div className="">
					<C_feat title="소통" desc="고객과의 연결" img="temp" />
				</div>
				<div className="w-full md:w-1/2">
					<C_feat title="연결" desc="고객과의 연결" img="temp" />
				</div>
			</div>
		</div>

	)
}
