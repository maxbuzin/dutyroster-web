"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarCheck, MessageSquare, MoreVertical, User2 } from "lucide-react";

const sidebarUsers = [
  {
    id: 1,
    name: "Jane Doe",
    role: "SJJP",
    status: "Active",
    online: true,
    avatar: "",
    badges: ["Active"],
  },
  {
    id: 2,
    name: "John Smith",
    role: "SJJP",
    status: "2 days off",
    online: true,
    avatar: "",
    badges: ["2 days off"],
  },
  {
    id: 3,
    name: "Emily Stone",
    role: "SJJP",
    status: "On leave",
    online: true,
    avatar: "",
    badges: ["On leave"],
  },
  {
    id: 4,
    name: "Mike Brown",
    role: "Military",
    status: "1 week off",
    online: true,
    avatar: "",
    badges: ["1 week off"],
  },
  {
    id: 5,
    name: "Anna White",
    role: "SJJP",
    status: "Active",
    online: false,
    avatar: "",
    badges: ["Active"],
  },
  {
    id: 6,
    name: "Tom Green",
    role: "SJJP",
    status: "2 days off",
    online: false,
    avatar: "",
    badges: ["2 days off"],
  },
  {
    id: 7,
    name: "Sara Black",
    role: "SJJP",
    status: "On leave",
    online: false,
    avatar: "",
    badges: ["On leave"],
  },
  {
    id: 8,
    name: "Chris Blue",
    role: "Military",
    status: "1 week off",
    online: false,
    avatar: "",
    badges: ["1 week off"],
  },
];

export default function UserListSection({ title, users }: { title: string; users: typeof sidebarUsers }) {
  return (
    <div className="mb-4">
      {title && <div className="text-sm font-semibold text-gray-500 mb-2">{title}</div>}
      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/40 transition duration-300">
            <div className="relative">
              <Avatar>
                {user.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.name} />
                ) : (
                  <AvatarFallback>
                    {user.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                )}
              </Avatar>
              <span
                className={`absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full border-2 border-gray-900 ${
                  user.online ? "bg-green-500" : "bg-gray-500"
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-base text-gray-100 leading-tight truncate">{user.name}</div>
              <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-0.5">
                <span>{user.role}</span>
                {user.badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant={
                      badge === "Active"
                        ? "default"
                        : badge === "On leave"
                        ? "destructive"
                        : "secondary"
                    }
                    className="ml-1 px-1 py-0.5 text-[9px] h-4 min-w-4"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-400 hover:text-white"
                >
                  <MoreVertical size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                sideOffset={5}
                className="z-50 min-w-[160px] rounded-md bg-gray-800 p-2 shadow-lg border border-gray-700 mr-2"
              >
                <DropdownMenuItem className="px-3 py-2 text-sm text-gray-100 hover:bg-gray-700 rounded cursor-pointer">
                  <User2 className="text-gray-100 mr-2" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 py-2 text-sm text-white hover:bg-gray-700 rounded cursor-pointer">
                  <CalendarCheck className="text-gray-100 mr-2" />
                  Add to Event
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 py-2 text-sm text-white hover:bg-gray-700 rounded cursor-pointer">
                  <MessageSquare className="text-gray-100 mr-2" />
                  Send Message
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        ))}
      </ul>
    </div>
  );
}
