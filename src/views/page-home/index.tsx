import React from 'react'

type Props = {}

const HomeUI = (props: Props) => {
  return (
    <div className='bg-primary h-[calc(100vh-100px)] flex justify-center items-center'>
      <div className='w-[90%] md:w-[70%]'>
        <p className='text-center text-white text-6xl md:text-8xl font-bold italic anton uppercase'>Let's make our life a bit easy</p>
      </div>
    </div>
  )
}

export default HomeUI