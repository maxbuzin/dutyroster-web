'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Plus } from 'lucide-react'
import { Mail } from 'lucide-react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import UserSidebar from '../_components/users-sidebar'
import { Separator } from '@/components/ui/separator'

export default function TeamPage() {
	const [inviteLink, setInviteLink] = useState('')

	const generateInviteLink = () => {
		const token = 'abc123'
		setInviteLink(`${window.location.origin}/invite?token=${token}`)
	}

	return (
		<SidebarProvider>
			<main className='w-full flex flex-col flex-1 relative'>
				<SidebarTrigger className='self-end rotate-180' />
				<div className='w-full flex flex-col flex-1 relative pr-10 gap-5'>
					<div className='flex space-x-2 self-end'>
						<Dialog>
							<DialogTrigger asChild>
								<Button variant='default' className='flex items-center space-x-1 cursor-pointer'>
									<Plus className='h-4 w-4' />
									<span>Add New User</span>
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Add New User</DialogTitle>
									<DialogDescription>Enter the details for the new team member.</DialogDescription>
								</DialogHeader>
								<div className='grid gap-4 py-4'>
									<Input placeholder='Code (e.g., PS0001)' />
									<Input placeholder='Name' />
									<Input type='email' placeholder='Email' />
									<Input type='tel' placeholder='Phone' />
									<Select>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Role' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='military'>Military</SelectItem>
											<SelectItem value='sjjp'>SJJP</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<DialogFooter>
									<Button>Add User</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
						<Dialog onOpenChange={(open) => open && generateInviteLink()}>
							<DialogTrigger asChild>
								<Button
									variant='secondary'
									className='!bg-gray-200 !text-gray-700 hover:!bg-gray-300 flex items-center space-x-1 cursor-pointer'>
									<Mail className='h-4 w-4' />
									<span>Invite User</span>
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Invite User</DialogTitle>
									<DialogDescription>Send an invitation to a new team member.</DialogDescription>
								</DialogHeader>
								<div className='grid gap-4 py-4'>
									<Input value={inviteLink} readOnly />
									<div className='flex space-x-2'>
										<Button onClick={() => navigator.clipboard.writeText(inviteLink)}>
											Copy Link
										</Button>
										<Button asChild variant='outline'>
											<a
												href={`https://wa.me/?text=${encodeURIComponent(inviteLink)}`}
												target='_blank'
												rel='noopener noreferrer'>
												WhatsApp
											</a>
										</Button>
										<Button asChild variant='outline'>
											<a
												href={`mailto:?subject=Join Our Team&body=${encodeURIComponent(inviteLink)}`}>
												Email
											</a>
										</Button>
									</div>
								</div>
								<DialogFooter>
									<Button>Send Invite</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>
					<Separator />
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
						<div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
							<h2 className='text-sm text-gray-500'>Total Members</h2>
							<p className='text-2xl font-semibold text-gray-800'>24</p>
						</div>
						<div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
							<h2 className='text-sm text-gray-500'>Active Today</h2>
							<p className='text-2xl font-semibold text-sky-600'>16</p>
						</div>
						<div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
							<h2 className='text-sm text-gray-500'>On Leave</h2>
							<p className='text-2xl font-semibold text-gray-800'>3</p>
						</div>
						<div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
							<h2 className='text-sm text-gray-500'>Pending Invites</h2>
							<p className='text-2xl font-semibold text-gray-800'>2</p>
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
						<div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
							<h3 className='text-sm text-gray-500 mb-2'>Activity Overview</h3>
							<div className='h-40 bg-gray-100 rounded animate-pulse' />
						</div>
						<div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
							<h3 className='text-sm text-gray-500 mb-2'>Team Engagement</h3>
							<div className='h-40 bg-gray-100 rounded animate-pulse' />
						</div>
					</div>
				</div>
			</main>
			<UserSidebar />
		</SidebarProvider>
	)
}
