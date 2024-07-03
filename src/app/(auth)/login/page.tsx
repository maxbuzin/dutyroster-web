import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChevronLeft } from "lucide-react";

export default function Signin() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-around bg-gray-700 text-gray-100">
      <Header />
      <section className="mx-auto mt-20 flex w-full max-w-7xl flex-1 flex-col items-center gap-8 py-10">
        <Image
          src="/logo-light.svg"
          width={250}
          height={0}
          alt="Logo Duty Roster"
        />
        <form className="flex w-full max-w-96 flex-col gap-3 p-5">
          <Input
            type="email"
            id="Email"
            name="email"
            placeholder="username"
            className="text-gray-800 focus-visible:outline-sky-700"
          />
          <Input
            type="password"
            id="Password"
            name="password"
            placeholder="password"
            className="text-gray-800 focus-visible:outline-sky-700"
          />
          <span className="mb-3 flex items-center justify-between text-sm font-light leading-normal tracking-normal text-gray-400">
            <label className="flex cursor-pointer select-none items-center gap-2 text-gray-400 duration-300 hover:text-gray-100">
              <Input
                type="checkbox"
                placeholder="tete"
                className="h-4 w-4 accent-sky-600"
              />
              Remember my password
            </label>
            <Link
              href=""
              className="text-gray-400 duration-300 hover:text-gray-100"
            >
              Forgot password
            </Link>
          </span>
          <div className="flex w-full flex-col gap-8 font-light">
            <Button className="bg-sky-600 uppercase duration-300 hover:bg-sky-500">
              Log in
            </Button>
            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="underline duration-300 hover:text-gray-100 hover:shadow-lg"
              >
                Register
              </Link>
              .
            </p>
          </div>
        </form>
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 duration-300 hover:text-gray-100"
        >
          <ChevronLeft /> Back to home
        </Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
