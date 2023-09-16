"use client";
import React, {useState} from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Transfer() {
    const [amount, setAmount] = useState(0)
  const searchParams = useSearchParams();
  const router = useRouter()
  const email = searchParams.get("email")

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/sucess?email=${encodeURIComponent(email)}&&amount=${amount}`)
  }

  return (
    <div className="items-center container mx-auto flex flex-col">
        <div className="userContainer flex justify-center mt-32 items-center gap-7">
      <Image src="/user.png" alt="user" width={50} height={50} />
      <h2 className="text-lg font-light">{email}</h2>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-2 mt-10">
          <h2 className="text-3xl inline-flex">$</h2>
        <input type="number" defaultValue={amount} className="w-48 py-2 px-6 rounded-full border border-slate-600 focus:border-primary focus:border-2 focus:ring-8" 
        onChange={(e)=> setAmount(e.target.value)}
        />
        </div>
      <button type="submit"  disabled={amount == 0 || !amount} className="mt-14 mb-10 w-96 bg-primary text-white px-7 py-3 rounded-full disabled:bg-blue-400">Next</button>
      </form>
    </div>
  );
}
