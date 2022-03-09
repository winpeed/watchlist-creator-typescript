import React from "react";

type Props = {};

export default function TopComponent({}: Props) {
  return (
    <section className="top">
      <div>
        <h1>Find your film</h1>
        <p className="watchlist-link">My Watchlist</p>
      </div>
    </section>
  );
}
