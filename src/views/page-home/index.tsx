import React from 'react'

type Props = {}

const HomeUI = (props: Props) => {
  return (
    <div className='bg-primary min-h-screen'>
      <div className='w-[90%] md:w-[70%] mx-auto flex justify-center items-center pt-[150px]'>
        <p className='text-center text-white text-6xl md:text-8xl font-bold italic anton uppercase'>Let's make our life a bit easy</p>
      </div>
    </div>
  )
}

export default HomeUI