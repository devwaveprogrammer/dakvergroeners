

import './globals.css'
import { Inter } from 'next/font/google'
import DataProvider from '../Context/DataProvider'
import Navbar from '../Components/Navbar/Navbar'
import Aside from '../Components/Aside/Aside'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Developed with MERN Stack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <DataProvider>
        <Navbar />
       <div className="grid grid-cols-3 gap-4 ">
       <div className="col-span-2 pl-10 pt-10">{children}</div>
       <div><Aside/></div>
       </div>
       </DataProvider>
      </body>

    </html>
  )
}
