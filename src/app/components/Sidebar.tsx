import Link from 'next/link';
import Image from "next/image";
import React from 'react'

const Sidebar = () => {
  return (
    <nav className='bg-white border-r border-gray-400 w-14 p-2'>
      <section className='flex flex-col w-full mt-10'>
        <Link href="/" className='w-full flex items-center'>
          <figure className='m-auto'>
            <Image
              src="/images/icons/book_blue.png"
              alt="Picture of book"
              width={30}
              height={30}
              priority
            />
          </figure>
        </Link>
      </section>
    </nav>
  )
}

export default Sidebar;