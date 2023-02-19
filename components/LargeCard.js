import Image from 'next/image'
import React from 'react'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='relative py-8 cursor-pointer lg:mt-10 lg:active:animate-bounce transition transform duration-2000 ease-linear'>
      <div className='relative h-96 min-w-[300px]'>
        <Image
          alt='banner-image'
          className='rounded-2xl'
          src={img}
          objectFit='cover'
          layout='fill'
        />

        <div className='absolute top-32 left-12'>
          <h3 className='mb-2 w-64 text-4xl'>{title}</h3>
          <p className='mt-1 text-2xl'>{description}</p>
          <button className='px-4 py-2 mt-5 text-sm rounded-lg bg-gray-900 text-white'>{buttonText}</button>
        </div>
      </div>
    </section>
  )
}

export default LargeCard