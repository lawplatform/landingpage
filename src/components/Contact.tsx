"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import validator from "validator";
import { ZodObject, ZodType, z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from "../util/supabase";


interface IAuthForm {
	name: string;
	email: string;
	phone: string;
	title: string;
	text: string;
}


export default function Contact() {

	const {
		register,
		formState: { errors },
		handleSubmit,
		setError,
	} = useForm<IAuthForm>({ mode: 'onBlur' });


	const submitData: SubmitHandler<IAuthForm> = async (input) => {
		const { data, error } = await supabase
			.from('asking')
			.insert([
				{ name: input.name, phone: input.phone, title: input.title, text: input.text },
			])
			.select()

		console.log("insert complete");
		console.log(data);



	}

	return (
		<>
			<div className="flex flex-col justify-center items-center op">
				<Image src="/bg/asking.svg" alt="asking person" width="500" height="350"></Image>
			</div>
			<h1 id="title" className="mt-12 mb-5 text-4xl font-extrabold tracking-tight leading-none text-primary-content-900 md:text-5xl lg:text-6xl dark:text-whiteop">문의하기</h1>

			<div className=" px-24">
				<p className=" py-6  op">로플랫폼에 관련된 모든 문제와 문의사항에 대해 담당자가 최대한 빨리 답변드리겠습니다. </p>
			</div>

			<div className="py-8 lg:py-16  mx-1 max-w-container  sm:px-2 md:px-52">
				<form className="space-y-8 flex flex-col justify-start text-start" onSubmit={handleSubmit(submitData)}>
					<div className="flex flex-row justify-between">
						<div className="w-1/2 mr-1">
							<label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">이름</label>
							<input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="홍길동" required
								{...register('name', {
									required: '이름을 입력해주세요.',
								},
								)} />
							<p className="text-red-400">{errors?.name?.message}</p>
						</div>



						<div className="w-1/2 mx-1">
							<label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">휴대폰</label>
							<input type="tel" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="010-2323-2323" required  {...register("phone", {
								required: '휴대폰 번흐를 입력해주세요.',
							},
							)} />



						</div>


					</div>
					<div className="w-full mx-1">
						<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">이메일</label>
						<input type="tel" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="mymail@mail.com" required    {...register("email", {
							pattern: {
								value:
									/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
								message: "이메일 형식에 맞지 않습니다.",
							},
						})} />
						<p className="text-red-400">{errors?.email?.message}</p>



					</div>
					<div>
						<label htmlFor="제목" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">제목</label>
						<input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="무엇이 궁금하신가요 ? " required  {...register("title")} />
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="내용" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">내용</label>
						<textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="내용을 남겨주세요..."  {...register("text")}></textarea>
					</div>
					<input type="submit" className="btn btn-neutral" />
				</form >
			</div >
		</>
	)
}

