import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Velo App By Vi Krumklang</title>
        <meta name="description" content="Welcome to Velo Antwerpen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.h1}>Bike & Co</h1>
        <Image
          src="/bike.png"
          alt="Velo Antwerpen"
          width={600}
          height={400}
          className={styles.image}
        />
        <div className={styles.circle}></div>
        <h2 className={styles.h2}>
          Discover the convenience of renting bikes from various stations across
          Antwerp.
        </h2>
        <Link legacyBehavior href="/stations">
          <a className={styles.button}>Explore Stations</a>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
