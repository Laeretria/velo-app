import { useEffect, useState } from "react";
import StationList from "../components/StationList";
import { fetchStations } from "./api/Velo-api";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const getStations = async () => {
      const stationsData = await fetchStations();
      setStations(stationsData.slice(0, 3)); // Neem minstens 3 stations
    };
    getStations();
  }, []);

  return (
    <>
      <Head>
        <title>Velo App By Vi Krumklang</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <StationList stations={stations} />
      </div>
    </>
  );
};

export default Home;
