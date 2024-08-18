import Link from 'next/link';
import Image from "next/image";
import React from 'react';

const Footer = () => {
  return (
    <nav className='bg-white border-t border-gray-300 w-full min-[580px]:hidden fixed bottom-0'>
      <section className='flex items-center m-2 px-2'>
        <Link href="/" className='hover:bg-slate-200 rounded-md'>
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
          </div>
        </Link>
      </section>
    </nav>
  )
}

export default Footer;