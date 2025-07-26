'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	const [showPassword, setShowPassword] = useState(false)
	const [password, setPassword] = useState('')
	return (
		<div className='w-full min-h-screen flex flex-col justify-center items-center'>
			<main className='flex flex-col justify-center items-center gap-12 -mt-20'>
				<Image src='logo-light.svg' width={300} height={0} alt='logo' />
				<h2 className='text-center text-pretty max-w-2xl leading-relaxed'>
					Welcome to DutyRoster! The easiest way to manage your team&apos;s schecule.
				</h2>
				<form className='w-full max-w-md flex flex-col gap-4'>
					<Input type='email' placeholder='Enter your Email' className='!bg-gray-100 text-gray-700' />
					{/* Password input with show/hide toggle using Lucide Eye icons */}
					<div className='relative'>
						<Input
							type={showPassword ? 'text' : 'password'}
							placeholder='Enter your Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
                     className='!bg-gray-100 text-gray-700'
						/>
						<button
							type='button'
							className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer transition-all duration-300'
							onClick={() => setShowPassword((prev) => !prev)}
							tabIndex={-1}
							aria-label={showPassword ? 'Hide password' : 'Show password'}>
							{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
						</button>
					</div>
				<Link
					href="/forgot"
					className="-mt-2 text-sm text-gray-100 hover:underline self-center transition-all duration-300"
				>
					Forgot password?
				</Link>
				<Button
					type="button"
					className="mt-4 cursor-pointer transition-all duration-300"
					onClick={() => {
						window.location.href = '/admin'
					}}
				>
					Login
				</Button>
				<div className="flex justify-center mt-2">
					<span className="text-sm text-gray-700 dark:text-gray-300">
						Don&apos;t have an account?{' '}
						<Link
							href="/register"
							className="text-foreground font-medium hover:underline transition-all duration-300"
						>
							Register
						</Link>.
					</span>
				</div>
				</form>
			</main>
		</div>
	)
}
