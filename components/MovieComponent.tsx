import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MovieData } from "./BottomComponent";

type DataProps = {
  data: MovieData;
};

export default function MovieComponent({
  data,
  handleProps,
}: {
  data: any;
  handleProps: any;
}) {
  const { imdbID, Title, Poster, Genre, Runtime, imdbRating, Plot } = data;

  return (
    <div className="card">
      {Poster !== "N/A" && (
        <Image
          src={`${Poster}`}
          alt={`${Title}`}
          width={1920}
          height={1080}
          objectFit="contain"
        />
      )}

      <div className="first">
        <h2>{Title}</h2>
        <Image src="/star.svg" alt="Star Image" width={20} height={20} />
        <p>{imdbRating}</p>
      </div>

      <div className="second">
        <p className="duration">{Runtime}</p>
        <p className="category">{Genre}</p>
        <p className="watchlist" onClick={() => handleProps(imdbID)}>
          <Image src="/add-icon.svg" alt="Add Icon" width={20} height={20} />
          <span>Watchlist</span>
        </p>
      </div>

      <p className="desc">{Plot}</p>
      <hr />
    </div>
  );
}
