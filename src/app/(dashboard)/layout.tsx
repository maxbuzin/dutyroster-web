import type { Metadata } from 'next'
import '../globals.css'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/app-sidebar'

export const metadata: Metadata = {
	title: 'Dashboard | DutyRoster',
	description: 'Admin dashboard for DutyRoster',
}

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-full flex'>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	)
}
