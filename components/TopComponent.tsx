import React from "react";
import Link from "next/link";

type Props = {};

const TopComponent = (props: Props) => {
  return (
    <section className="top">
      <div>
        <h1>Find your film</h1>
        <Link href="/watchlist">My Watchlist</Link>
      </div>
    </section>
  );
};

export default TopComponent;
