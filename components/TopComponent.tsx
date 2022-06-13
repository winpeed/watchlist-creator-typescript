import React from "react";
import Link from "next/link";

type TopCompProps = {
  headerText: string;
  linkText: string;
  url: string;
};

const TopComponent = ({ headerText, linkText, url }: TopCompProps) => {
  return (
    <section className="top">
      <div>
        <h1>{headerText}</h1>
        <Link href={`/${url}`}>{linkText}</Link>
      </div>
    </section>
  );
};

export default TopComponent;
