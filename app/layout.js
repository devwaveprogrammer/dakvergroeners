import Navbar from '@/Components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Aside from '@/Components/Aside/Aside'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Developed with MERN Stack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
       <div className="grid grid-cols-3 gap-4 ">
       <div className="col-span-2 pl-10 pt-10">{children}</div>
       <div><Aside/></div>
       </div>

      </body>
    </html>
  )
}
