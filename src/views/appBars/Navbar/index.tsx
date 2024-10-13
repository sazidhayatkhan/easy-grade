import React from 'react'
import Link from 'next/link'
type Props = {}

const NavbarUI = (props: Props) => {
  return (
    <div className='bg-primary fixed z-[20] top-0 w-full px-6 flex justify-between items-center'>
        <Link href="/">
            <div>
                <p className='text-white font-semibold text-2xl py-2'>Easy Grade</p>
            </div>
        </Link>
        <div className='flex justify-end items-center gap-6'>
            {
                serviceData?.map((item:any,i:any)=>(
                    <Link href={item?.url || ""} key={i}>
                        <button className='font-semibold text-sm text-white border-b-[0px] hover:border-b-[2px]'>{item?.title}</button>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default NavbarUI

const serviceData = [
    {
        title:"Mark Convert",
        url:'/mark-convert'
    },
    {
        title:"Grade Convert",
        url:'/grade-convert'
    }
]