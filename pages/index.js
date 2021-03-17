import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextList | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam accusantium quos consectetur eaque fugiat labore, nulla sint! Voluptate, quas.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam accusantium quos consectetur eaque fugiat labore, nulla sint! Voluptate, quas.</p>
        <Link href="/list">
          <a className={styles.btn}>See the List</a>
        </Link>
      </div>
    </>
  )
}
