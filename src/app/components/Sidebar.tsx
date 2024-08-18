import Link from 'next/link';
import Image from "next/image";
import React from 'react';

const Sidebar = () => {
  return (
    <aside className='flex h-full py-20 px-2 fixed border-r border-gray-400 lg:w-[140px] max-[580px]:hidden'>
      <section className=''>
        <Link href="/" className='flex items-center hover:bg-slate-200 rounded-md w-full'>
          <div className='flex items-center justify-center w-full lg:gap-2'>
            <figure className='p-2'>
              <Image
                src="/images/icons/book_blue.png"
                alt="Picture of book"
                width={28}
                height={28}
                priority
              />
            </figure>
            <p className='max-[1024px]:hidden'>Home</p>
          </div>
        </Link>
      </section>
    </aside>
  )
}

export default Sidebar;