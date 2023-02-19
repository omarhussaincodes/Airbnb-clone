import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <>
      <Head>
        <title>Airbnb | Beckham</title>
      </Head>

      <Header></Header>
      <Banner />

      <main className="max-w-[80%] mx-auto px-2 py-2 shadow-xl">

        <section className="pt-3">
          <h2 className="text-3xl font-semibold pb-3">Explore Nearby</h2>

          {/* Small Card Component */}
          <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-4">
            {
              exploreData?.map((cardData, i) => (
                <SmallCard
                  key={i}
                  data={cardData}
                />
              ))
            }
          </div>
        </section>

        <section className="pt-3">
          <h1 className="text-3xl font-semibold py-4">Live Anywhere</h1>

          <div className="p-3 ml-3 flex space-x-3 overflow-scroll scrollbar-hide md:scrollbar-default">
            {
              cardData?.map((mediumCardData, i) => (
                <MediumCard
                  key={i}
                  img={mediumCardData.img}
                  title={mediumCardData.title}
                />
              ))
            }
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb.'
          buttonText='Get Inspired'
        />

      </main>

      <footer className="mt-3">
        <Footer />
      </footer>

    </>
  )
}

export async function getStaticProps() {

  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
    .then(res => res.json())
    .catch(e => console.log('Failed to retrieve cards data', e));

  let cardData = await fetch('https://www.jsonkeeper.com/b/VHHT')
    .then(res => res.json())
    .catch(e => console.log('Failed to retrieve Cards Data', e));

  return {
    props: {
      exploreData,
      cardData
    }
  }
}



