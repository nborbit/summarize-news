import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Summarize news</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          summ.news
        </h1>

        <p className={styles.card}>
            Service to summarize news from major websites and sources like reddit, twitter, medium<br/>
            Attempt to reduce information overload and time spent online staying up-to-date with latest news, events and trends in topics that matter
        </p>

        <p className={styles.description}>
            
        </p>

      </main>

      <footer className={styles.footer}>
        @ 2021
      </footer>
    </div>
  )
}
