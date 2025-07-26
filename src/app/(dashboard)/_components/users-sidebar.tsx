'use client'

import { useState } from 'react'
import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal, ListFilter } from 'lucide-react'

interface User {
	name: string
	team: string
	status: string
	statusVariant: 'default' | 'secondary' | 'destructive' | 'outline'
	avatarUrl?: string
	online: boolean
}

const onlineUsers: User[] = [
	{
		name: 'Full Name here',
		team: 'SJJP',
		status: 'Active',
		statusVariant: 'default',
		online: true,
	},
	{
		name: 'Full Name here',
		team: 'SJJP',
		status: '2 days off',
		statusVariant: 'secondary',
		online: true,
	},
	{
		name: 'Full Name here',
		team: 'SJJP',
		status: '2 years off',
		statusVariant: 'secondary',
		online: true,
	},
	{
		name: 'Full Name here',
		team: 'Military',
		status: '1 month off',
		statusVariant: 'secondary',
		online: true,
	},
]

const offlineUsers: User[] = [
	{
		name: 'Full Name here',
		team: 'SJJP',
		status: 'Active',
		statusVariant: 'default',
		online: false,
	},
	{
		name: 'Full Name here',
		team: 'SJJP',
		status: '20 days off',
		statusVariant: 'secondary',
		online: false,
	},
	{
		name: 'Full Name here',
		team: 'SJJP',
		status: 'On leave',
		statusVariant: 'destructive',
		online: false,
	},
	{
		name: 'Full Name here',
		team: 'Military',
		status: '1 week off',
		statusVariant: 'secondary',
		online: false,
	},
]

// Helper to parse status into category and numeric amount
type StatusInfo = { category: string; amount: number }
const parseStatus = (status: string): StatusInfo => {
	const lower = status.toLowerCase()
	if (lower.includes('active')) return { category: 'active', amount: 0 }
	if (lower.includes('leave')) return { category: 'onLeave', amount: 0 }
	const match = lower.match(/(\d+)\s*(day|week|month|year)s?\s+off/)
	if (match) {
		const amount = parseInt(match[1], 10)
		const unit = match[2]
		switch (unit) {
			case 'day':
				return { category: 'daysOff', amount }
			case 'week':
				return { category: 'weeksOff', amount }
			case 'month':
				return { category: 'monthsOff', amount }
			case 'year':
				return { category: 'yearsOff', amount }
		}
	}
	return { category: 'other', amount: 0 }
}

// Ascending rank: years > months/weeks > days > active > on leave
const ascRank: Record<string, number> = {
	yearsOff: 0,
	monthsOff: 1,
	weeksOff: 2,
	daysOff: 3,
	active: 4,
	onLeave: 5,
	other: 6,
}
// Descending rank: active > days > months/weeks > years > on leave
const descRank: Record<string, number> = {
	active: 0,
	daysOff: 1,
	weeksOff: 2,
	monthsOff: 3,
	yearsOff: 4,
	onLeave: 5,
	other: 6,
}

export default function UsersSidebar() {
	const [sortOption, setSortOption] = useState<'A-Z' | 'Online/Offline' | 'Status'>('A-Z')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

	const users: User[] = [...onlineUsers, ...offlineUsers]

	const sortedUsers = [...users].sort((a, b) => {
		let result: number
		switch (sortOption) {
			case 'A-Z':
				result = a.name.localeCompare(b.name)
				break
			case 'Online/Offline':
				result = a.online === b.online ? 0 : a.online ? -1 : 1
				break
			case 'Status': {
				const aInfo = parseStatus(a.status)
				const bInfo = parseStatus(b.status)
				if (sortOrder === 'asc') {
					// Use ascending rank and sort by amount descending within same category
					result = ascRank[aInfo.category] - ascRank[bInfo.category]
					if (result === 0) {
						result = (bInfo.amount ?? 0) - (aInfo.amount ?? 0)
						if (result === 0) result = a.status.localeCompare(b.status)
					}
				} else {
					// Descending rank and sort by amount ascending within same category
					result = descRank[aInfo.category] - descRank[bInfo.category]
					if (result === 0) {
						result = (aInfo.amount ?? 0) - (bInfo.amount ?? 0)
						if (result === 0) result = a.status.localeCompare(b.status)
					}
				}
				return result
			}
			default:
				result = 0
		}
		// For A-Z and Online/Offline, invert result on descending
		return sortOrder === 'asc' ? result : -result
	})

	const handleSortChange = (option: 'A-Z' | 'Online/Offline' | 'Status') => {
		if (option === sortOption) {
			setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
		} else {
			setSortOption(option)
			setSortOrder('asc')
		}
	}

	return (
		<Sidebar side='right'>
			<SidebarContent className='p-0'>
				<nav className='flex flex-col gap-4 p-4 overflow-y-auto'>
					<div className='flex items-center justify-between mb-2'>
						<h3 className='text-lg font-semibold'>My Team</h3>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='outline' size='sm' className='flex items-center gap-2'>
									<ListFilter className='h-4 w-4' />
									<span>Sort</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								<DropdownMenuItem onSelect={() => handleSortChange('A-Z')}>A–Z</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSortChange('Online/Offline')}>
									Online/Offline
								</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSortChange('Status')}>
									Status
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<ul className='space-y-2'>
						{sortedUsers.map((user, index) => (
							<li key={index}>
								<div className='flex items-center justify-between bg-muted/10 p-2 rounded-lg'>
									<div className='flex items-center gap-3'>
										<Avatar
											className={`h-10 w-10 border-2 ${
												user.online ? 'border-green-500' : 'border-gray-400'
											}`}>
											{user.avatarUrl && <AvatarImage src={user.avatarUrl} alt={user.name} />}
											<AvatarFallback>
												{user.name
													.split(' ')
													.map((n) => n[0])
													.join('')
													.slice(0, 2)}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className={`text-sm font-medium ${user.online ? '' : 'text-gray-400'}`}>
												{user.name}
											</p>
											<div className='flex gap-1 flex-wrap mt-1'>
												<Badge variant='secondary' className='text-[10px]'>
													{user.team}
												</Badge>
												<Badge variant={user.statusVariant} className='text-[10px]'>
													{user.status}
												</Badge>
											</div>
										</div>
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant='ghost' size='icon'>
												<MoreHorizontal className='h-4 w-4' />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent className='bg-gray-700 mr-4'>
											<DropdownMenuItem>View</DropdownMenuItem>
											<DropdownMenuItem>Edit</DropdownMenuItem>
											<DropdownMenuItem>Remove</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</li>
						))}
					</ul>
				</nav>
			</SidebarContent>
		</Sidebar>
	)
}
