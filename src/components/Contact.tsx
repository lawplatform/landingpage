export default function Contact() {
	return (
		<>
			<h1 id="title" className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-primary-content-900 md:text-5xl lg:text-6xl dark:text-whiteop">문의하기</h1>

			<div className=" px-24">
				<p className=" py-6 mb-20  op">제약을 뛰어넘는 혁신과 성장을 실현합니다 </p>

			</div>

			<div className="py-8 lg:py-16  mx-1 max-w-container  sm:px-2 md:px-52">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">문의하기</h2>
				<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">문의하기에 대한 설명</p>
				<form action="#" className="space-y-8 flex flex-col justify-start text-start">
					<div className="flex flex-row justify-between">
						<div className="w-1/2 mr-5">
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">이메일</label>
							<input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
						</div>
						<div className="w-1/2 mx-5">
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">휴대폰</label>
							<input type="tel" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />



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
