"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter, useSearchParams } from "next/navigation";


export default function Sucess() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email")
  const amount = searchParams.get("amount")
  const router = useRouter();
  return (
    <div className='success'>
      <div className="container mx-auto flex flex-col justify-center items-center h-[80vh]">
        <Image src={'/tick.png'} width={80} height={80} alt='tick'/>
        <h3 className='text-xl mt-10'>You have sent {amount} USD to {email}</h3>
        <button onClick={()=> router.push('/')} className="mt-14 mb-10 w-96 bg-primary text-white px-7 py-3 rounded-full">Send More Money</button>
      </div>
    </div>
  )
}
