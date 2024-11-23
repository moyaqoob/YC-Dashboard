import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/logo.png"
import { signIn, signOut } from 'next-auth/react'
import { headers } from 'next/headers'
import { auth } from '@/auth'
import {Camera} from 'lucide-react'
// import { usePathname } from 'next/navigation'

const Navbar =async () => {
  const session= await auth();
  // const pathname = usePathname();
  console.log(session?.user)

  return (
    <header className='px-5 py-3'>
      <nav className='flex items-center justify-between'>
        <Image src={logo} alt='' className='p-3 min-h-min'/>
          <div className='text-2xl text-black flex gap-4 font-sans border rounded-sm'>
              <Link href={"/"}>
                Create
              </Link>
              <div>
                  SignOut
              </div>
              <div>
                <span>
                  <Camera size={48} color='red' fill='red' className='relative bottom-1'/>
                </span>
              </div>
          </div>
      </nav>

    </header>
  )
}

export default Navbar