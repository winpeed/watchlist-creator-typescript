import Link from "next/link";
import React from "react";

type Props = {};

const WatchListContainer = (props: Props) => {
  return (
    <>
      <section className="top">
        <div>
          <h1>My Watchlist</h1>
          <Link href="/">Search for movies</Link>
        </div>
      </section>
    </>
  );
};

export default WatchListContainer;
