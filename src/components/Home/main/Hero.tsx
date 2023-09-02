import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='bg-secondaryDark h-full'>
        <div className='relative w-full h-[600px]'>
            <Image src='/assets/home/mobile/image-header.jpg' alt='headphones' fill className='object-cover' />
        </div>
    </div>
  )
}
