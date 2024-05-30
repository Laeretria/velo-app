import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const StationList = ({ stations }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedStation, setHighlightedStation] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      setHighlightedStation(null);
    } else {
      const foundStation = stations.find((station) =>
        station.name.toLowerCase().includes(term.toLowerCase()),
      );
      setHighlightedStation(foundStation ? foundStation.id : null);
    }
  };

  return (
    <div>
      <h1 className={styles.stationListH1}>Bike & Co</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for a station..."
          className={styles.searchInput}
        />
      </div>
      <ul className={styles.stationList}>
        {stations.map((station) => (
          <li
            key={station.id}
            className={`${styles.stationItem} ${
              highlightedStation === station.id ? styles.highlighted : ""
            }`}
          >
            <Link legacyBehavior href={`/stations/${station.id}`}>
              <a className={styles.stationLink}>{station.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationList;
