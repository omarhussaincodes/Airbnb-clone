import Image from 'next/image';
import { MenuIcon, SearchIcon, GlobeAltIcon, UserCircleIcon, UserAddIcon, UserGroupIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Router, { withRouter, useRouter } from 'next/router'

function Header({ placeholder }) {

    const [searchInput, setInputState] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    };
    const [guestCount, setGuestCount] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const handleSearch = () => {
        Router.push(
            {
                pathname: '/search',
                query: {
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    guestCount,
                    location: searchInput
                },
            }
        );
    }

    const reset = () => {
        setInputState('');
        setStartDate(new Date());
        setEndDate(new Date());
        setGuestCount(1);
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 p-2
         bg-white shadow-md  md:p-4'>

            {/* Left */}
            <div className='relative flex items-center h-10
            hover:animate-bounce transition transform duration-150 ease-in-out font-extrabold hover:contrast-150'>
                <Image
                    onClick={() => router.push('/')}
                    className='cursor-pointer'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                    src="https://links.papareact.com/qd3"
                    alt=''
                />
            </div>

            {/* Middle */}
            <div className='flex items-center rounded-full py-2 md:border-2 md:shadow-sm  hover:border-red-400'>
                <input name='searchInput' value={searchInput} onChange={(e) => setInputState(e.target.value)}
                 className='flex-grow text-sm text-gray-600 placeholder-gray-400 pl-2 bg-transparent
                 outline-none md:border-none caret-red-400' type='text'
                    placeholder={placeholder || 'Start your Search'}
                />
                <SearchIcon className='hidden md:inline-flex h-8 mx-2 text-white bg-red-400 rounded-full p-2 cursor-pointer
                hover:contrast-150 border-white'></SearchIcon>
            </div>

            {/* Right */}
            <div className='flex space-x-3 items-center cursor-pointer justify-end text-gray-500'>
                <p className='p-2 bg-transparent hidden md:inline-flex hover:bg-gray-100 hover:rounded-full
                hover:shadow-sm font-mono'>Become a Host</p>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    <GlobeAltIcon className='h-10 p-2 hover:bg-gray-100 hover:shadow-sm hover:rounded-full' />
                </svg>
                <div className='flex items-center border-2 border-gray-200 rounded-full p-2 space-x-2 hover:shadow-md'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                    <span className="absolute flex h-3 w-3 right-5 top-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>
            </div>

            {/* {calender} */}
            <div className='flex flex-col col-span-3 mx-auto item-center'>
                {
                    searchInput &&
                    <>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                            minDate={new Date()}
                            rangeColors={['#FD5861']}
                        />
                        <div className='flex items-center justify-between border-b mb-4'>
                            <h2 className='text-2xl font-semibold font-mono pl-2'>Number of Guests</h2>
                            <span className='flex pr-2'>
                                <UserGroupIcon className='h-5 w-5 mr-1' />
                                <input className='w-10 font-semibold outline-none caret-red-400 text-red-400' type='number' min="0" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} />
                            </span>
                        </div>
                        <div className='flex'>
                            <button className='flex-grow text-gray-500 tracking-wide' onClick={() => reset()}>
                                Cancel
                            </button>
                            <button className='flex-grow text-red-400 tracking-wide' onClick={() => handleSearch()}>
                                Search
                            </button>
                        </div>
                    </>
                }
            </div>

        </header>
    )
}

export default withRouter(Header);