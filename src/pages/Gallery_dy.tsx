export default function Gallery_dy() {
	return (
		<div className=" mx-auto p-4 h-screen">
			<div className="flex flex-row space-x-4">
				<div className="flex w-full flex-col space-y-4 bg-black">
					<div className="h-72 rounded-lg bg-red-100">a</div>
					<div className="h-32 rounded-lg bg-red-100">b</div>
					<div className="h-60 rounded-lg bg-red-100">c</div>
				</div>
				<div className="flex w-full flex-col space-y-4 bg-green-100">
					<div className="h-12 rounded-lg bg-blue-100">d</div>
					<div className="h-72 rounded-lg bg-blue-100">e</div>
					<div className="h-48 rounded-lg bg-blue-100">f</div>
				</div>
				<div className="flex w-full flex-col space-y-4 bg-yello-100">
					<div className="h-28 rounded-lg bg-green-100">s</div>
					<div className="h-40 rounded-lg bg-green-100">s</div>
					<div className="h-64 rounded-lg bg-green-100">c</div>
				</div>
			</div>
		</div>
	)
}
