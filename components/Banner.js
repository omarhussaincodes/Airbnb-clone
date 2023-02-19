import Image from 'next/image';
import React from 'react';

function Banner() {
    return (
        <div className='relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[375px] 2xl:h-[425px]'>
            <Image
                src='https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                objectFit='cover'
                layout='fill'
                objectPosition='center'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-gray-900 font-mono text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
                <button className='bg-white m-2 px-8 py-4 font-bold text-red-400 items-center rounded-full shadow-md
                 md:text-lg hover:shadow-xl active:scale-90 transition duration-150'>
                    I'm flexible!
                </button>
            </div>

        </div>
    )
}

export default Banner;