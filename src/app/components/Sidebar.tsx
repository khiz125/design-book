import Link from 'next/link';
import Image from "next/image";
import React from 'react'

const Sidebar = () => {
  return (
    <nav className='bg-white border-r border-gray-400 lg:w-48 px-3'>
      <section className='flex flex-col items-center w-full h-full my-20'>
        <Link href="/" className='w-full hover:bg-slate-200 rounded-md'>
          <div className='flex items-center w-full lg:gap-2'>
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