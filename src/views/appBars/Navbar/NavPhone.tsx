import DrawerUI from '@/components/drawer'
import React from 'react'
import { RiMenu3Line } from 'react-icons/ri'

type Props = {}

const NavPhone = (props: Props) => {
  return (
    <div>
      <DrawerUI buttonContent={<RiMenu3Line/>}/>
    </div>
  )
}

export default NavPhone