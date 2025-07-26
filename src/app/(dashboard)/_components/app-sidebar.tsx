'use client'

import Link from "next/link"
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarHeader,
   SidebarSeparator,
 } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Calendar, Settings, LogOut } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Team", icon: Users, href: "/team" },
  { label: "Events", icon: Calendar, href: "/events" },
  { label: "Settings", icon: Settings, href: "/settings" },
];
 
 export function AppSidebar() {
   const pathname = usePathname();
   return (
     <Sidebar side="left">
      <SidebarHeader className='py-5'>
         <Image src='/logo-h-light.svg' width={200} height={0} alt='Logo' className="mx-auto" />
      </SidebarHeader>
       <SidebarContent>
      <nav className="flex flex-1 flex-row md:flex-col gap-2 p-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
              pathname === item.href && "bg-sidebar-accent"
            )}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col items-center md:items-stretch p-2 mt-auto">
        <form action="/" method="get">
          <Button
            type="submit"
            variant="ghost"
            className="flex items-center gap-2 w-full justify-start cursor-pointer hover:!bg-red-400"
            aria-label="Logout"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </form>
      </div>
       </SidebarContent>
       <SidebarFooter />
     </Sidebar>
   )
 }