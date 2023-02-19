import Image from 'next/image'
import React from 'react'

function MediumCard({ title, img }) {
    return (
        <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
            <div className='relative h-60 w-60'>
                <Image
                    alt='medium-card-img'
                    className='rounded-lg'
                    src={img}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <h1 className='text-2lg font-semibold text-black py-2'>{title}</h1>
        </div>
    )
}

export default MediumCard