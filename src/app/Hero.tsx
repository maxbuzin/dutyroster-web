import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 gap-8">
      <h1 className="mx-auto flex flex-col items-center text-3xl leading-tight">
        Welcome to{" "}
        <span className="-rotate-6 p-3">
          <Image
            src="/logo-text-sky-700.svg"
            width={300}
            height={0}
            alt=""
            className="w-96 select-none brightness-150 drop-shadow-lg"
          />
        </span>
      </h1>
      <q className="mx-auto text-balance text-center text-2xl md:max-w-3xl">
        Join{" "}
        <span className="rounded font-bold underline shadow-lg">
          DutyRoster
        </span>{" "}
        to easily manage your staff’s schedules!
      </q>
      <Link href="/login" className="mx-auto">
        <Button className="h-14 bg-sky-600 px-12 text-lg font-bold uppercase tracking-wide duration-300 hover:bg-sky-500">
          Login Now!
        </Button>
      </Link>
    </div>
  );
}
