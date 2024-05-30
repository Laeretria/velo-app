import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const StationList = ({ stations }) => {
  return (
    <div>
      <ul className={styles.stationList}>
        <h1 className={styles.stationListH1}>Bike & Co</h1>
        {stations.map((station) => (
          <li key={station.id} className={styles.stationItem}>
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
