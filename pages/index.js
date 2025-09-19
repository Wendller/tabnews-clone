import Head from "next/head";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Postly — Em construção</title>
        <meta
          name="description"
          content="Postly — agregador de posts com ideias e aprendizados diários sobre vida adulta."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.logo}>Postly</div>
          <h1 className={styles.title}>Postly está em construção</h1>
          <p className={styles.text}>
            Em breve: um agregador de posts sem bullshit sobre tudo aquilo que
            se busca
          </p>
          <div className={styles.meta}>
            <span className={styles.pill}>🛠️ Construção</span>
            <span className={styles.sep}>•</span>
            <small>Volte em breve — novidades chegando</small>
          </div>
        </div>
      </main>
    </>
  );
}
