import Link from 'next/link';
import Image from "next/image";
import React from 'react'

const Sidebar = () => {
  return (
    <nav className='bg-white border-r border-gray-400 lg:w-48 w-16'>
      <section className='flex flex-col w-full mt-10'>
        <Link href="/" className='w-full hover:bg-slate-100 rounded h-12'>
          <div className='flex items-center w-full lg:m-4 m-2 gap-2'>
            <figure className='p-2'>
              <Image
                src="/images/icons/book_blue.png"
                alt="Picture of book"
                width={28}
                height={28}
                priority
              />
            </figure>
            <p className='hidden lg:contents'>Home</p>
          </div>
        </Link>
      </section>
    </nav>
  )
}

export default Sidebar;