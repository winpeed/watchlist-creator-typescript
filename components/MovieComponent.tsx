import Image from "next/image";
import React from "react";

type Props = {};

export default function MovieComponent({ data }: Props) {
  const { Title, Poster, Genre, Runtime, imdbRating, Plot } = data;
  return (
    <div className="card">
      <Image
        src={`${Poster}`}
        alt={`${Title}`}
        width={40}
        height={120}
        objectFit="contain"
      />
      <div className="first">
        <h2>{Title}</h2>
        <Image src="/star.svg" alt="Star Image" width={20} height={20} />
        <p>{imdbRating}</p>
      </div>

      <div className="second">
        <p>{Runtime}</p>
        <p className="category">{Genre}</p>
        <p className="watchlist">
          <Image src="/add-icon.svg" alt="Add Icon" width={20} height={20} />
          <span>Watchlist</span>
        </p>
      </div>

      <p className="desc">{Plot}</p>
      <hr />
    </div>
  );
}
