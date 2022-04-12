import React, { useState, useEffect } from "react";
import BottomComponent from "../components/BottomComponent";
import Watchlist from "../components/Watchlist";
import { KeyProps } from "../pages";

export default function HomeContainer({ dataKey }: KeyProps) {
  const [isWatchList, setIsWatchList] = useState(false);

  return (
    <>
      <section className="top">
        <div>
          {isWatchList ? <h1>My Watchlist</h1> : <h1>Find your film</h1>}
          {isWatchList ? (
            <p
              className="watchlist-link"
              onClick={() => setIsWatchList(!isWatchList)}
            >
              Search for Movies
            </p>
          ) : (
            <p
              className="watchlist-link"
              onClick={() => setIsWatchList(!isWatchList)}
            >
              My Watchlist
            </p>
          )}
        </div>
      </section>
      {isWatchList ? (
        <Watchlist
          toggleWatch={() => setIsWatchList(!isWatchList)}
          watch={isWatchList}
        />
      ) : (
        <BottomComponent dataKey={dataKey} />
      )}
    </>
  );
}
