import React from "react";
import StationItem from "./StationItem";

const StationDetail = ({ station }) => {
  return (
    <div>
      <StationItem station={station} />
      <Link href="/">
        <a>Back to list</a>
      </Link>
    </div>
  );
};

export default StationDetail;
