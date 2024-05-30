import React from "react";
import styles from "@/styles/Home.module.css";

const StationItem = ({ station }) => {
  return (
    <div>
      <h2 className={styles.stationName}>{station.name}</h2>
      <div className={styles.border}>
        <p>{station.extra.address}</p>
        <p>Free bikes: {station.free_bikes}</p>
        <p>Empty slots: {station.empty_slots}</p>
      </div>
    </div>
  );
};

export default StationItem;
