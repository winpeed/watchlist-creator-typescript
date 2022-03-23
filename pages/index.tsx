import Head from "next/head";
import HomeContainer from "../containers/HomeContainer";
import { GetStaticProps } from "next";

export type KeyProps = {
  dataKey: string;
};

const Home = ({ dataKey }: KeyProps) => {
  return (
    <div>
      <Head>
        <title>Watchlist Creator App built with TypeScript</title>
        <meta
          name="description"
          content="A watchlist creator app built with TypeScript"
        />
      </Head>
      <HomeContainer dataKey={dataKey} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      dataKey: process.env.API_KEY,
    },
  };
};
