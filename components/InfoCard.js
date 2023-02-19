import Image from 'next/image';
import React from 'react'
import { StarIcon, HeartIcon } from '@heroicons/react/outline';

function InfoCard(props) {
    const { img, title, lat, long, price, star, location, total, description } = props.cardDetails;

    return (
        <div className='flex mt-3 py-5 px-4 cursor-pointer hover:opacity-80 hover:shadow-lg 
            transition duration-100 ease-out hover:translate-x-2 md:transform-none hover:border-l-2 hover:border-red-400'>

            <div className='relative rounded-lg h-40 w-24 md:h-52 md:w-80 flex-shrink-0'>
                <Image
                    className='rounded-xl'
                    src={img}
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <div className='flex flex-col flex-grow mx-2 my-1'>
                <div className='flex items-center justify-between mb-1'>
                    <p className='text-sm'>{location}</p>
                    <HeartIcon className='h-5 w-5 hover:scale-105 transition transform duration-150 ease-out' />
                </div>
                <h2 className='text-xl font-semibold'>{title}</h2>

                <div className='border-b w-10 pt-2' />

                <p className='text-sm flex-grow text-gray-500 pt-1 flex-wrap'>{description}</p>

                <div className='flex justify-between items-end'>
                    <p className='flex items-center hover:animate-pulse'>
                        <StarIcon className='h-4 text-sm text-red-400' />
                        <span className='ml-1'>
                            {star}
                        </span>
                    </p>

                    <div className='hover:animate-pulse transition transform duration-150 ease-in-out'>
                        <p className='text-xl font-semibold pb-1 lg:text-2xl'>{price}</p>
                        <p className='text-sm font-extralight lg:text-md text-right'>{total}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard