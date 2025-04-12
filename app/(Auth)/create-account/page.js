"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  checkAuthState,
  registerUser,
  saveUserToFirestore,
} from "@/app/FirebaseAPI";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  useEffect(() => {
    const unsubscribe = checkAuthState((user) => {
      if (user) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  },[]);

  const handleSignup = async () => {
    const { user, error } = await registerUser(email, password);
    if (user) {
      const saveResult = await saveUserToFirestore(user.uid, email, username);
      if (saveResult.success) {
        router.push("/");
      } else {
        // setError(error.message)
      }
    } else {
      setError(error.message);
    }
  };
  // /create-account
  return (
    <div className="pt-10 flex items-center justify-center">
      <div className="flex w-full max-w-2xl shadow-xl flex-col items-center justify-center p-10">
        <Image src={"/logo.png"} alt="logo" width={200} height={200} />
        <h2 className="text-3xl">Create an Account</h2>
        <h2>Enter your Email and Password to create a new account</h2>
        <div className="w-full flex flex-col gap-5 mt-7">
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="user@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            value={password}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className={"cursor-pointer"} onClick={handleSignup}>
            Register
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          <p>
            Already have an Account?
            <Link href={"/login"} className="text-blue-500 pl-2 underline">
              click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
