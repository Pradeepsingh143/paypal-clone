import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/globalComponents/Header/page.js'
import Footer from '@/globalComponents/Footer/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paypal',
  description: 'Send & Request payment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
       {children}
       <Footer /> 
        </body>
    </html>
  )
}
