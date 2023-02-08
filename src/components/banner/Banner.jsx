import React from 'react'
import banner from "../../utils/images/banner.jpg";


export default function Banner() {
  return (
    <div className='w-full h-screen'>
        <img src={banner} alt="" className='w-[100%] h-[100%] object-cover' />
    </div>
  )
}
