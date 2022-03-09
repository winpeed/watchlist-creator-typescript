import Image from "next/image";
import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";

type Props = {};

export default function BottomComponent({}: Props) {
  const [movies, setMovies] = useState<null | []>(null);
  const [searchText, setSearchText] = useState<string | "">("");

  async function getMovies() {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=b1015377&s=${searchText}`
    );
    const data = await response.json();
    return data.Search.map((result) => result.imdbID);
  }

  async function fetchMovieDetails() {
    const idMovie = await getMovies();

    const movieDetails = idMovie.map(async (id) => {
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
    Promise.all(results).then((data) => {
      console.log(data);
      setMovies(data);
    });
  }

  return (
    <section className="bottom">
      <div className="input-wrapper">
        <Image src="/search.svg" alt="Search Icon" width={20} height={20} />
        <input
          type="text"
          placeholder="Search for a movie"
          id="search-text"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <button id="search-button" onClick={setAllMovies}>
          Search
        </button>
      </div>

      {!movies ? (
        <div className="explore">
          <Image
            src="/start.svg"
            alt="Start Exploring"
            width={200}
            height={200}
          />
          <p className="text-explore">Start exploring</p>
        </div>
      ) : (
        movies.map((result) => (
          <MovieComponent key={result.Title} data={result} />
        ))
      )}
    </section>
  );
}
