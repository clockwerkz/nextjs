import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nina List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga fugit
          esse minima vitae provident assumenda quod doloremque iusto nobis,
          quia ea, consequatur recusandae ipsum eos modi rerum atque doloribus
          nemo.
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga fugit
          esse minima vitae provident assumenda quod doloremque iusto nobis,
          quia ea, consequatur recusandae ipsum eos modi rerum atque doloribus
          nemo.
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga fugit
          esse minima vitae provident assumenda quod doloremque iusto nobis,
          quia ea, consequatur recusandae ipsum eos modi rerum atque doloribus
          nemo.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
