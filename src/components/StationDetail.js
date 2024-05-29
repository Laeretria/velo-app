import React from "react";
import StationItem from "./StationItem";
import Link from "next/link";

const StationDetail = ({ station }) => {
  return (
    <div>
      <StationItem station={station} />
      <Link legacyBehavior href="/">
        <a>Back to list</a>
      </Link>
    </div>
  );
};

export default StationDetail;
