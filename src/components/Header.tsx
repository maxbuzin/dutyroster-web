import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between bg-gray-800 p-5">
      <Link
        href="/"
        className="duration-300 hover:-translate-y-1"
      >
        <Image
          src="/logo-h-light.svg"
          width={175}
          height={0}
          alt="Logo Duty Roster"
        />
      </Link>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="text-gray-100 hover:bg-transparent hover:text-gray-300 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Menu size={30} />
      </Button>
    </header>
  );
}
