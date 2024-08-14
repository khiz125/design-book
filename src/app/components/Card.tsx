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
        <div className='w-full min-w-[300px] h-[400px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>{children}</div>
      </Link>
    </Suspense>
  )
}

export default Card;