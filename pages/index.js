import Head from "next/head";
import requests from "@/utils/services";
import { Trending } from "@/components";

export default function Home({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
}) {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"
          integrity="sha384-3LK/3kTpDE/Pkp8gTNp2gR/2gOiwQ6QaO7Td0zV76UFJVhqLl4Vl3KL1We6q6wR9"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="home">
          <div className="T-list T-list-1">
            <h1 id="myList">Popular on Netflix</h1>
            <div>
              <div className="box">
                <Trending trendingNow={topRated} />
              </div>
            </div>
          </div>
          <div className="T-list">
            <h1 id="myList">Trending Now</h1>
            <div>
              <div className="box">
                <Trending trendingNow={trendingNow} />
              </div>
            </div>
          </div>

          <div className="T-list">
            <h1 id="myList">Netflix Originals</h1>
            <div>
              <div className="box">
                <Trending trendingNow={netflixOriginals} />
              </div>
            </div>
          </div>

          <div className="T-list">
            <h1 id="myList">Action Movies</h1>
            <div>
              <div className="box">
                <Trending trendingNow={actionMovies} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const [netflixOriginals, trendingNow, topRated, actionMovies] =
    await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
    ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
    },
  };
};
