import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
}

const Card: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className='w-[300px] border border-gray-400 h-[480px]'>{children}</div>
    </Link>
  )
}

export default Card