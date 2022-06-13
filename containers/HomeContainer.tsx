import React from "react";
import BottomComponent from "../components/BottomComponent";
import TopComponent from "../components/TopComponent";
import { KeyProps } from "../pages";

export default function HomeContainer({ dataKey }: KeyProps) {
  return (
    <>
      <TopComponent
        headerText="Find your film"
        linkText="My Watchlist"
        url="watchlist"
      />
      <BottomComponent dataKey={dataKey} />
    </>
  );
}
