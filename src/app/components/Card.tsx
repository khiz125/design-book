import Link from 'next/link';
import React, { FC, ReactNode, Suspense } from 'react';
import Loading from '../designbook/[id]/loading';

type Props = {
  href: string;
  children: ReactNode;
}

const Card: FC<Props> = ({ href, children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Link href={href}>
        <div className='border border-gray-400 w-full min-w-[300px] h-[400px]'>{children}</div>
      </Link>
    </Suspense>
  )
}

export default Card;