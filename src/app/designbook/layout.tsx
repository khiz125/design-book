import React from 'react'

const DesignbookLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <section className='w-full h-screen'>{ children }</section>
  )
}

export default DesignbookLayout