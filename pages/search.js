import React from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

function Search(props) {
    const { searchResults } = props;
    const router = useRouter();
    const { location, startDate, endDate, guestCount } = router.query;
    const formatDate = (dateInput) => format(new Date(dateInput), 'dd MMMM yy');

    return (
        <div>
            <Header
                placeholder={`${location} | ${formatDate(startDate)} | ${formatDate(endDate)} | ${guestCount} guests`}
            />

            <main className='flex mt-5 mx-2'>
                <section className='px-2 py-2 flex-grow'>
                    <p className='text-sm'>200+ stays - <span className='px-2 py-1 rounded-md border-1 bg-gray-100'>{formatDate(startDate)}</span> - <span className='px-2 py-1 rounded-md border-1 bg-gray-100'>{formatDate(endDate)}</span> - {guestCount} guests</p>
                    <h2 className='text-2xl font-semibold mb-6 mt-2'>{`Stays in ${location}`}</h2>
                    <div className='hidden md:inline-flex space-x-4 text-gray-800 '>
                        <button className='btn'>Cancellation flexibility</button>
                        <button className='btn'>Type of place</button>
                        <button className='btn'>Price</button>
                        <button className='btn'>Rooms and Beds</button>
                        <button className='btn'>More Filters</button>
                    </div>

                    <div className='flex flex-col'>
                        {
                            searchResults?.map((info, i) => (
                                <InfoCard
                                    key={i}
                                    cardDetails={info}
                                />
                            ))
                        }
                    </div>

                </section>

                <section className='hidden xl:inline-flex min-w-[500px]'>
                    <Map searchResults={searchResults} />
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    console.log(context.query);
    const { query } = context;

    // extract query and fetch data from API relatime implementation

    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
        .then(res => res.json())
        .catch(e => console.log('Oops! something went wrong! Failed to retrive search results', e))


    return {
        props: {
            searchResults
        }
    }
}
