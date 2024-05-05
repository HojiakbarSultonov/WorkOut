import { useAuthState } from '@/stores/auth.store'
import { Separator } from '../ui/separator'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/form'
import { z } from 'zod'

function Register() {
	const { setAuth } = useAuthState()

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = async (values: z.infer<typeof registerSchema>) => {
		const { email, password } = values
	}

	return (
		<div className='flex flex-col'>
			<h2 className='text-xl font-bold'>Register</h2>
			<p className='text-muted-foreground'>
				Already have an account?{' '}
				<span
					className='text-blue-500 cursor-pointer hover:underline'
					onClick={() => setAuth('login')}
				>
					Sign in
				</span>
			</p>
			<Separator className='my-2' />
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email address</FormLabel>
								<FormControl>
									<Input placeholder='example@gmail.com' {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='grid grid-cols-2 gap-2'>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder='*****' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='confirmPassword'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input placeholder='*****' {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div>
						<Button type='submit' className='mt-2 h-12 w-full'>
							Submit
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default Register
