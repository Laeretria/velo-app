import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const StationItem = ({ station }) => {
  const router = useRouter();

  const capitalizeAddress = (address) => {
    return address.toLowerCase().replace(/(^|\s)\S/g, (letter) => {
      return letter.toUpperCase();
    });
  };

  return (
    <div>
      <h2 className={styles.stationName}>{station.name}</h2>
      <div className={styles.border}>
        <p>{capitalizeAddress(station.extra.address)}</p>
        <p>
          {" "}
          <Image
            className={styles.icon}
            src="/bicycle.png"
            alt="Bike Icon"
            width={24}
            height={24}
          />
          Free bikes : {station.free_bikes}
        </p>
        <p>
          {" "}
          <Image
            className={styles.icon}
            src="/key-1.png"
            alt="Slot Icon"
            width={24}
            height={24}
          />
          Empty slots : {station.empty_slots}
        </p>
      </div>
    </div>
  );
};

export default StationItem;
