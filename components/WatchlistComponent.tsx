import Link from "next/link";
import Image from "next/image";
import MovieWatchlist from "./MovieWatchlist";
import React, { useState, useEffect } from "react";

interface Movies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

function WatchlistComponent() {
  const [watchList, setWatchList] = useState([]);
  const [searchText, setSearchText] = useState<string | "">("");

  useEffect(() => {
    setWatchList(JSON.parse(localStorage.getItem("watchlist")!));
  }, []);

  function handleRemove(id: string) {
    const initArray = [...watchList];
    const finalArray = initArray.filter(
      (movie: MovieData) => id !== movie.imdbID
    );
    setWatchList(finalArray);
    localStorage.setItem("watchlist", JSON.stringify(finalArray));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <section className="bottom">
      <form onSubmit={handleSubmit} className="input-wrapper">
        <Image src="/search.svg" alt="Search Icon" width={20} height={20} />
        <input
          type="text"
          placeholder="Search for a movie"
          id="search-text"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <button id="search-button">Search</button>
      </form>
      {watchList.length == 0 || watchList == null ? (
        <div className="explore">
          <div className="wrapper">
            <p className="text-explore">
              Your watchlist is looking a little empty
            </p>

            <p className="span-holder">
              <span style={{ marginRight: "0.5em" }}>
                <Image
                  src="/add-icon.svg"
                  alt="Add Icon"
                  width={15}
                  height={15}
                />
              </span>

              <Link href="/">Lets add some movies!</Link>
            </p>
          </div>
        </div>
      ) : (
        watchList.map((result: MovieData, index: number) => (
          <MovieWatchlist
            key={index}
            data={result}
            removeProps={() => handleRemove(result.imdbID)}
          />
        ))
      )}
    </section>
  );
}

export default WatchlistComponent;
