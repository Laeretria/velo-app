import React from "react";
import Link from "next/link";

const StationList = ({ stations }) => {
  return (
    <div>
      <h1>Velo Stations in Antwerpen</h1>
      <ul>
        {stations.map((station) => (
          <li key={station.id}>
            <Link legacyBehavior href={`/stations/${station.id}`}>
              <a>{station.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationList;
