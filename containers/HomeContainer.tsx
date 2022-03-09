import React from "react";
import BottomComponent from "../components/BottomComponent";
import TopComponent from "../components/TopComponent";

type Props = {};

export default function HomeContainer({}: Props) {
  return (
    <>
      <TopComponent />
      <BottomComponent />
    </>
  );
}
