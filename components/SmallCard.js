import Image from 'next/image';
import React from 'react';

function SmallCard({ data }) {
    return (
        <div className='flex items-center m-2 mt-4 space-x-4 rounded-xl cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-in-out'>
            <div className='relative h-16 w-16'>
                <Image
                    className='rounded-lg'
                    src={data.img}
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            <div>
                <h2 className='font-medium'>{data.location}</h2>
                <h3 className='text-gray-500'>{data.distance}</h3>
            </div>

        </div >
    )
}

export default SmallCard