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
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res =
        await createUserWithEmailAndPassword(
          email,
          password,
        );
      console.log({ res });
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">
          Register now...
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
        <Button onClick={handleSignUp}>
          Register
        </Button>
      </CardContent>
      <CardFooter>
        <Link
          href="/sign-in"
          className="mx-auto text-sm text-gray-500 hover:text-gray-800"
        >
          Already have an account? Sign In.
        </Link>
      </CardFooter>
    </Card>
  );
}
