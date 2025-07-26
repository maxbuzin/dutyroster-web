'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

type EventCardProps = {
	id: string
	name: string
	active: boolean
	image: string
	startDate: string
	endDate?: string
}

export default function EventCard(props: EventCardProps) {
	const slug = '/events/' + props.name.toLowerCase().replace(/\s+/g, '-')

	if (props.active) {
		return (
			<Link href={slug} className='no-underline' target='_blank' rel='noopener noreferrer'>
				<Card className=' bg-gray-100 hover:bg-gray-50 min-w-xs w-full hover:scale-102 hover:-translate-0.5 duration-300 transition-all'>
					<CardHeader className='p-0'>
						<Image
							src={props.image}
							alt={props.name}
							width={400}
							height={200}
							className='w-full h-40 object-cover rounded-t-md'
						/>
					</CardHeader>
					<CardContent className='py-4 px-4 text-gray-700'>
						<CardTitle className='text-base font-medium'>{props.name}</CardTitle>
						<Badge className='bg-green-600 hover:bg-green-600 text-white mt-1'>Active</Badge>
						<p className='text-xs mt-2'>Start: {props.startDate}</p>
						<p className='text-xs'>End: {props.endDate || 'No end date'}</p>
					</CardContent>
				</Card>
			</Link>
		)
	}

	return (
		<Link href={slug} className='no-underline' target='_blank' rel='noopener noreferrer'>
			<Card className='bg-gray-100 py-4 px-8 flex justify-between items-center min-w-xs w-full text-gray-700 hover:scale-102 hover:-translate-0.5 duration-300 transition-all'>
				<div>
					<p className='font-medium'>{props.name}</p>
					<p className='text-xs'>Start: {props.startDate}</p>
					<p className='text-xs'>End: {props.endDate || 'No end date'}</p>
				</div>
				<Badge className='bg-gray-500 hover:bg-gray-500 text-white text-xs'>Inactive</Badge>
			</Card>
		</Link>
	)
}
