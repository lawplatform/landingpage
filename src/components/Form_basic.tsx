import { useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { object, string, minLength, endsWith } from 'valibot';

const schema = object({
	username: string('필수 입력 입니다', [
		minLength(3, '이름을 입력해주세요')
	]),
	password: string('password is required'),
});

export default function Form_Basic() {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: valibotResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit((d) => console.log(d))}>
			<input {...register('username', { required: "해당 필드는 필수입니다." })} />
			{errors.username && <p className="text-red-500">{errors.username.message}</p>}
			<input type="password" {...register('password')} />
			<input type="submit" />
		</form>
	);
};
