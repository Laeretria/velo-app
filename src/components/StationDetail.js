import React from "react";
import StationItem from "./StationItem";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const StationDetail = ({ station }) => {
  return (
    <div>
      <StationItem station={station} />
      <Link legacyBehavior href="/stations">
        <a className={styles.back}>Home</a>
      </Link>
    </div>
  );
};

export default StationDetail;
