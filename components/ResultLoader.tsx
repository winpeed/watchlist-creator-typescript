import React from "react";
import ContentLoader from "react-content-loader";

const ResultLoader = (props: any) => (
  <ContentLoader
    style={{ maxWidth: "91%", margin: "0em auto", display: "flex" }}
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#33333"
    {...props}
  >
    <rect x="0" y="8" rx="3" ry="3" width="110" height="250" />
    <rect x="140" y="26" rx="3" ry="3" width="150" height="4" />
    <rect x="310" y="26" rx="3" ry="3" width="15" height="4" />
    <rect x="340" y="26" rx="3" ry="3" width="20" height="4" />

    <rect x="140" y="70" rx="3" ry="3" width="20" height="4" />
    <rect x="180" y="70" rx="3" ry="3" width="120" height="4" />
    <rect x="320" y="70" rx="3" ry="3" width="120" height="4" />

    <rect x="140" y="106" rx="3" ry="3" width="300" height="3" />
    <rect x="140" y="116" rx="3" ry="3" width="300" height="3" />
    <rect x="140" y="126" rx="3" ry="3" width="300" height="3" />
    <rect x="140" y="136" rx="3" ry="3" width="300" height="3" />
    <rect x="140" y="146" rx="3" ry="3" width="300" height="3" />
  </ContentLoader>
);

export default ResultLoader;
