'use client'

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Filter, SortAsc } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import EventCard from '@/app/(dashboard)/_components/event-card'

type Event = {
	id: string
	name: string
	active: boolean
	image: string
	startDate: string
	endDate?: string
}

const mockEvents: Event[] = [
	{
		id: '1',
		name: 'Team Building',
		active: true,
		image: '/event1.jpg',
		startDate: '2025-07-01',
		endDate: '2025-07-02',
	},
	{
		id: '2',
		name: 'Annual Review',
		active: false,
		image: '/event2.jpg',
		startDate: '2025-06-10',
	},
	{
		id: '3',
		name: 'Launch Party',
		active: true,
		image: '/event3.jpg',
		startDate: '2025-07-15',
		endDate: '2025-07-15',
	},
	{
		id: '4',
		name: 'Launch Party',
		active: true,
		image: '/event3.jpg',
		startDate: '2025-07-15',
		endDate: '2025-07-15',
	},
	{
		id: '5',
		name: 'Launch Party',
		active: true,
		image: '/event3.jpg',
		startDate: '2025-07-15',
		endDate: '2025-07-15',
	},
	{
		id: '6',
		name: 'Launch Party',
		active: false,
		image: '/event3.jpg',
		startDate: '2025-07-15',
		endDate: '2025-07-15',
	},
	{
		id: '7',
		name: 'Launch Party',
		active: false,
		image: '/event3.jpg',
		startDate: '2025-07-15',
		endDate: '2025-07-15',
	},
	{
		id: '8',
		name: 'Launch Party',
		active: false,
		image: '/event3.jpg',
		startDate: '2025-07-15',
		endDate: '2025-07-15',
	},
]

export default function EventsPage() {
	const [sortKey, setSortKey] = useState<'name' | 'startDate'>('name')
	const [sortAsc, setSortAsc] = useState(true)
	const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all')

	const sortedFilteredEvents = useMemo(() => {
		let result = [...mockEvents]
		if (filterStatus !== 'all') {
			result = result.filter((e) => e.active === (filterStatus === 'active'))
		}

		result.sort((a, b) => {
			const aValue = sortKey === 'name' ? a.name.toLowerCase() : a.startDate
			const bValue = sortKey === 'name' ? b.name.toLowerCase() : b.startDate
			if (aValue < bValue) return sortAsc ? -1 : 1
			if (aValue > bValue) return sortAsc ? 1 : -1
			return 0
		})

		return result
	}, [sortKey, sortAsc, filterStatus])

	const handleSort = (key: typeof sortKey) => {
		if (sortKey === key) setSortAsc(!sortAsc)
		else {
			setSortKey(key)
			setSortAsc(true)
		}
	}

	const activeEvents = sortedFilteredEvents.filter((e) => e.active)
	const inactiveEvents = sortedFilteredEvents.filter((e) => !e.active)

	return (
		<main className='w-full flex flex-col flex-1 relative py-12 px-6 gap-6'>
			<div className='flex items-center justify-between'>
				<div className='flex gap-2'>
					<Button variant='outline' size='sm' onClick={() => handleSort('name')}>
						<SortAsc className='w-4 h-4 mr-2' /> Sort by Name
					</Button>
					<Button variant='outline' size='sm' onClick={() => handleSort('startDate')}>
						<SortAsc className='w-4 h-4 mr-2' /> Sort by Date
					</Button>
					<Button
						variant='outline'
						size='sm'
						onClick={() =>
							setFilterStatus(
								filterStatus === 'active'
									? 'inactive'
									: filterStatus === 'inactive'
										? 'all'
										: 'active',
							)
						}>
						<Filter className='w-4 h-4 mr-2' /> Filter: {filterStatus}
					</Button>
				</div>
			</div>

			<div className='grid grid-flow-row grid-cols-4 gap-4'>
				{/* New Event Card */}
				<Card className='bg-gray-100 hover:bg-gray-50 cursor-pointer transition-colors text-gray-700 min-w-xs w-full hover:scale-102 hover:-translate-0.5 duration-300 transition-all'>
					<CardHeader className='flex items-center justify-center h-40 bg-gray-100 !bg-transparent'>
						<Plus className='w-10 h-10 text-gray-500' />
					</CardHeader>
					<CardContent className='text-center'>
						<p className='font-semibold text-sm'>Create New Event</p>
					</CardContent>
				</Card>

				{activeEvents.map((event) => (
					<EventCard key={event.id} {...event} />
				))}
			</div>

			{inactiveEvents.length > 0 && (
				<div className='mt-8'>
					<h2 className='text-lg font-semibold mb-4'>Inactive Events</h2>
					<div className='grid grid-flow-row grid-cols-4 gap-3'>
						{inactiveEvents.map((event) => (
							<EventCard key={event.id} {...event} />
						))}
					</div>
				</div>
			)}
		</main>
	)
}
