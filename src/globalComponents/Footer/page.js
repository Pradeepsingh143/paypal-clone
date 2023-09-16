import React from 'react'

export default function Footer() {
  return (
    <footer className='shadow-slate-600 h-48'>
      <div className="footer container mx-auto max-w-[1020px]">
        <div className="footer-menu flex justify-between list-none  items-center py-10">
          <div className="menu flex gap-4 text-sm font-light text-gray-700 capitalize max-w-[250px] flex-wrap">
            <li className="cursor-pointer">Help</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Fees</li>
            <li className="cursor-pointer">Security</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Developers</li>
            <li className="cursor-pointer">Partners</li>
          </div>
          <div className="language"><p className='text-sm font-light text-end'>English</p></div>
        </div>
      </div>
      <div className="footer-bottom container mx-auto max-w-[1020px] flex gap-5 text-sm text-gray-700 font-light list-none justify-end">
        <p>Copyright © 1999-2023 PayPal. All rights reserved.</p>
        <li className="cursor-pointer border-l-2 border-slate-400 pl-4">Privacy</li>
        <li className="cursor-pointer">Legal</li>
        <li className="cursor-pointer">Policy updates</li>
      </div>
    </footer>
  )
}
