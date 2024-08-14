import Link from "next/link";
import React from 'react';

export default function Header() {
  return (
    <nav className='w-full h-5'>
      <Link href="/">back to Home</Link>
    </nav>
  )
}