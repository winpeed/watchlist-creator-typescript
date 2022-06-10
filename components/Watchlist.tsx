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

function Watchlist() {
  const [watchList, setWatchList] = useState([]);

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
  return (
    <>
      <section className="bottom">
        {watchList.length == 0 || watchList == null ? (
          <div className="explore">
            <div className="wrapper">
              <p className="text-explore">
                Your watchlist is looking a little empty
              </p>

              <p className="span-holder">
                <Image
                  src="/add-icon.svg"
                  alt="Add Icon"
                  width={20}
                  height={20}
                />
                <span>Lets add some movies!</span>
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
    </>
  );
}

export default Watchlist;
