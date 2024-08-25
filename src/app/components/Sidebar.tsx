import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { lora, gentiumBookPlus } from "@/fonts"

const Sidebar = () => {
  return (
    <aside className='h-full py-20 px-2 fixed border-r border-gray-400 lg:w-[140px] max-[580px]:hidden'>
      <section className='w-full'>
        <Link href="/" className='flex items-center hover:bg-slate-200 rounded-md w-full'>
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
            <p className={`${gentiumBookPlus.variable} font-gentiumBookPlus text-lg max-[1024px]:hidden`}>Home</p>
          </div>
        </Link>
      </section>
    </aside>
  )
}

export default Sidebar;