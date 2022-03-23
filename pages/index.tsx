import type { NextPage } from "next";
import Head from "next/head";
import HomeContainer from "../containers/HomeContainer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Watchlist Creator App built with TypeScript</title>
        <meta
          name="description"
          content="A watchlist creator app built with TypeScript"
        />
      </Head>
      <HomeContainer />
    </div>
  );
};

export default Home;
