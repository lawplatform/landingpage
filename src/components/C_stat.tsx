export default function Card_stat() {
	return (
		<div className="w-48 bg-white shadow-2xl p-6 rounded-2xl">
			<div className="flex items-center">
				<span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
					<svg className="w-4 h-4 stroke-current text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
					</svg>
				</span>
				<span className="ml-2 text-sm font-medium text-gray-500">Comments</span>
			</div>
			<span className="block text-4xl font-semibold mt-4">264</span>
			<div className="flex text-xs mt-3 font-medium">
				<span className="text-red-500">-2%</span>
				<span className="ml-1 text-gray-500">last 14 days</span>
			</div>
		</div>
	)
}
