import Btn_learnMore from "../components/B_learnMore";
import EnterScene from "../world/EnterScene";

export default function Metaverse() {
	return (
		<div className="min-w-screen min-h-screen bg-base-200 flex items-center p-5 lg:p-10 overflow-hidden relative">
			<div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
				<div className="md:flex items-center -mx-10">
					<div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
						<div className="relative">
							<div className="w-[699px] bg-red-100">
								<EnterScene />
							</div>


							<div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>


						</div>
					</div>
					<div className="w-full md:w-1/2 px-10">
						<div className="mb-10">
							<h1 className="font-bold uppercase text-2xl mb-5 text-white"> Metaverse</h1>
							<p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... </p>
							<Btn_learnMore />
						</div>

					</div>
				</div>
			</div>
		</div >
	)
}

