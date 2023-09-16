"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PayHeader() {
  const navlink = [
    { title: "send", href: "/pay" },
    { title: "request", href: "/request" },
    { title: "contacts", href: "/contacts" },
    { title: "more", href: "/more" },
  ];
  const pathname = usePathname();
  return (
    <div className="header border-b">
      <div className="container py-5 mx-auto max-w-[960px]">
        <ul className="flex items-center gap-6">
          {navlink.map((link) => {
            const isActive = pathname === link.href;
            return (
                <Link
                className={`capitalize ${isActive ? 'bg-primary shadow-md text-white px-7 py-2 rounded-full' : 'text-slate-600 hover:text-slate-900'}`}
                href={link.href}
                key={link.title}
              >
                {link.title}
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
