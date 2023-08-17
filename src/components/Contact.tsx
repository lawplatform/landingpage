"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import validator from "validator";
import { ZodObject, ZodType, z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';



export default function Contact() {

	const phoneRegex = new RegExp(
		/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
	);

	const AskSchema = z.object({
		name: z.string(),
		phone: z.string().regex(phoneRegex, 'Invalid Number!'),
		email: z.string().email().trim().toLowerCase(),
		title: z.string(),
		text: z.string(),
	});

	type AskSchema = z.infer<typeof AskSchema>;

	const Form = () => {
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm<AskSchema>({
			resolver: zodResolver(AskSchema),
		});
		console.log(
			AskSchema.safeParse({
				name: "test",
				phone: "032-8727-0868",
				email: "abcd@naver.com",
				text: "hellow world"

			})
		);


		return (
			<>
				<div className="flex flex-col justify-center items-center op">
					<Image src="/bg/asking.svg" alt="asking person" width="500" height="350"></Image>
				</div>
				<h1 id="title" className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-primary-content-900 md:text-5xl lg:text-6xl dark:text-whiteop">문의하기</h1>

				<div className=" px-24">
					<p className=" py-6  op">무엇이든 물어보세요 </p>
				</div>

				<div className="py-8 lg:py-16  mx-1 max-w-container  sm:px-2 md:px-52">
					<form className="space-y-8 flex flex-col justify-start text-start" onSubmit={handleSubmit(submitData)}>
						<div className="flex flex-row justify-between">
							<div className="w-1/2 mr-1">
								<label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">이름</label>
								<input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="홍길동" required  {...register("name")} />
							</div>




							<div className="w-1/2 mx-1">
								<label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">휴대폰</label>
								<input type="tel" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="010-2323-2323" required  {...register("phone")} />



							</div>


						</div>
						<div className="w-full mx-1">
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">이메일</label>
							<input type="tel" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="mymail@mail.com" required  {...register("email")} />



						</div>
						<div>
							<label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
							<input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="무엇이 궁금하신가요 ? " required />
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label>
							<textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="내용을 남겨주세요..."></textarea>
						</div>
						<input type="submit" className="btn btn-neutral" />
					</form >
				</div >
			</>
		)
	}

