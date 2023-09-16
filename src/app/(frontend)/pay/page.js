"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {useState} from "react";

export default function Pay() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  function handleNext(e) {
    e.preventDefault()
    router.push(`/transfer?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="bg-white py-14 mb-10">
      <div className="container mx-auto max-w-5xl grid grid-cols-5 gap-10">
        <div className="left-col col-span-3">
          <h1 className="text-2xl pb-6">Send payment to anyone</h1>
          <form onSubmit={handleNext} className="flex flex-col items-start">
            <input type="email" name="email" id="email" placeholder="Name, @username, email, or mobile" className="w-full py-5 px-8 rounded-full border border-slate-600 focus:border-primary focus:border-2 focus:ring-8"
            onChange={(e)=> setEmail(e.target.value)}
            />
            <button className="py-3 px-8 mt-5 rounded-full border-2 border-slate-600 hover:bg-primary hover:text-white disabled:border-slate-400 disabled:text-slate-500 disabled:bg-slate-200" disabled={!email}>Next</button>
          </form>
        </div>
        <div className="right-col col-span-2 px-6">
          <h1 className="text-2xl pb-6">More ways to send</h1>
          <div className="flex gap-3">
            <div className="image">
              <Image src="/invoice.png" alt="invoice" width={35} height={35} />
            </div>
            <div className="content">
              <h3 className="text-lg">Send an invoice</h3>
              <p className="text-sm">Customise, track and send invoice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
