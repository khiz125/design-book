import React, { FC } from 'react';

type Props = {
  component: React.ReactNode;
}

const Card: FC<Props> = ({ component }) => {
  return (
    <div className='w-[300px] border border-gray-400 h-[480px]'>{component}</div>
  )
}

export default Card