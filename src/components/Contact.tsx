import Image from "next/image"
export default function Contact() {
	return (
		<>
			<div className="flex flex-col justify-center items-center op">
				<Image src="/bg/asking.svg" alt="asking person" width="500" height="350"></Image>
			</div>
			<h1 id="title" className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-primary-content-900 md:text-5xl lg:text-6xl dark:text-whiteop">문의하기</h1>

			<div className=" px-24">
				<p className=" py-6  op">궁금하신 모든 점을 물어보세요 </p>

			</div>

			<div className="py-8 lg:py-16  mx-1 max-w-container  sm:px-2 md:px-52">
				<form action="#" className="space-y-8 flex flex-col justify-start text-start">
					<div className="flex flex-row justify-between">
						<div className="w-1/2 mr-5">
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">이메일</label>
							<input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
						</div>
						<div className="w-1/2 mx-5">
							<label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">휴대폰</label>
							<input type="tel" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />



						</div>


					</div>
					<div>
						<label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
						<input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label>
						<textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="내용을 남겨주세요..."></textarea>
					</div>
					<button type="submit" className="btn btn-neutral">문의하기</button>
				</form >
			</div >
		</>
	)
}
