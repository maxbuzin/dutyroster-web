"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from 'next/navigation'

export default function SignIpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
      router.push('/')
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">
          Welcome Back!
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        <div className="mb-2 flex h-8 items-center justify-between">
          <span className="flex items-center gap-2 text-gray-500 hover:text-gray-800">
            <Checkbox id="show-password" />
            <label
              htmlFor="show-password"
              className="cursor-pointer text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show password
            </label>
          </span>
        </div>
        <Button onClick={handleSignIn}>
          Sign In
        </Button>
      </CardContent>
      <CardFooter>
        <Link
          href="/sign-up"
          className="mx-auto text-sm text-gray-500 hover:text-gray-800"
        >
          Do not have an account? Sign Up.
        </Link>
      </CardFooter>
    </Card>
  );
}
