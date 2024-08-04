import React from 'react'

type Props = {
  children: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className='w-[300px] border border-gray-400 h-[480px]'>{children}</div>
  )
}

export default Card