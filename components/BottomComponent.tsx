import Image from "next/image";
import React, { useEffect, useState } from "react";
import ResultLoader from "./ResultLoader";
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

export default function BottomComponent() {
  const [movies, setMovies] = useState<null | MovieData[]>(null);
  const [searchText, setSearchText] = useState<string | "">("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allItems, setAllItems] = useState<string[]>(["1", "2", "3"]);

  async function getMovies() {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=b1015377&s=${searchText}`
    );
    const data = await response.json();
    return data.Search.map((result: Movies) => result.imdbID);
  }

  async function fetchMovieDetails() {
    const idMovie = await getMovies();

    const movieDetails = idMovie.map(async (id: string) => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=b1015377&i=${id}`
      );
      const data = await response.json();
      return data;
    });
    return movieDetails;
  }

  async function setAllMovies() {
    const results = await fetchMovieDetails();
    Promise.all(results).then((data: MovieData[]) => {
      setMovies(data);
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true);
    setAllMovies();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [movies]);

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
          <ResultLoader key={item} style={{ margin: "1em 0em" }} />
        ))
      ) : (
        movies.map((result: MovieData, index: number) => (
          <MovieComponent key={index} data={result} />
        ))
      )}
    </section>
  );
}
