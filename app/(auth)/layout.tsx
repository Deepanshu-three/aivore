import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
        {children}
    </div>
  )
}

export default layout