import Image from "next/image";
import React, { useEffect, useState } from "react";
import ResultLoader from "./ResultLoader";
import { KeyProps } from "../pages";
import MovieComponent from "./MovieComponent";

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

const ISSERVER = typeof window === "undefined";

export default function BottomComponent({ dataKey }: KeyProps) {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [searchText, setSearchText] = useState<string | "">("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allItems, setAllItems] = useState<string[]>(["1", "2", "3"]);
  const [newList, setNewList] = useState(
    (!ISSERVER && JSON.parse(localStorage.getItem("watchlist")!)) || []
  );
  const [uniqueList, setUniqueList] = useState<MovieData[]>([]);

  async function getMovies() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${dataKey}&s=${searchText}`
      );
      const data = await response.json();
      return data.Search.map((result: Movies) => result.imdbID);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMovieDetails() {
    try {
      const idMovie = await getMovies();

      const movieDetails = idMovie.map(async (id: string) => {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${dataKey}&i=${id}`
        );
        const data = await response.json();
        return data;
      });
      return movieDetails;
    } catch (error) {
      console.error(error);
    }
  }

  async function setAllMovies() {
    try {
      const results = await fetchMovieDetails();
      Promise.all(results).then((data: MovieData[]) => {
        setMovies(data);
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setAllMovies();
  }

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(uniqueList));
    console.log(newList);
    console.log(uniqueList);
  }, [newList, uniqueList]);

  function handleList(result: MovieData) {
    setNewList((prev: any) => [...prev, result]);
    setUniqueList([...new Set([...newList])]);
  }

  return (
    <>
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

        {!movies ? (
          <div className="explore">
            <div style={{ width: "200px", height: "200px" }}>
              <Image
                src="/start.svg"
                alt="Start Exploring"
                width={1920}
                height={1080}
              />
            </div>
            <p className="text-explore">Start exploring</p>
          </div>
        ) : isLoading ? (
          allItems.map((item) => (
            <ResultLoader
              key={item}
              style={{ margin: "1em 0em", padding: "0em 2em" }}
            />
          ))
        ) : (
          movies.map((result: MovieData, index: number) => (
            <MovieComponent
              key={index}
              data={result}
              handleProps={() => handleList(result)}
            />
          ))
        )}
      </section>
    </>
  );
}
