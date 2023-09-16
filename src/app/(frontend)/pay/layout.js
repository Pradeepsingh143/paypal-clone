import PayHeader from "@/components/PayHeader/page"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paypal',
  description: 'Send payment',
}

export default function PayLayout({ children }) {
  return (
    <>
        <PayHeader />
        {children}
    </>
  )
}
