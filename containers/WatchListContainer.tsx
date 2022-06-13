import Link from "next/link";
import React from "react";
import TopComponent from "../components/TopComponent";
import WatchlistComponent from "../components/WatchlistComponent";

type Props = {};

const WatchListContainer = (props: Props) => {
  return (
    <>
      <TopComponent
        headerText="My Watchlist"
        linkText="Search for movies"
        url=""
      />
      <WatchlistComponent />
    </>
  );
};

export default WatchListContainer;
