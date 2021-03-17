import styles from '../../styles/List.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { users: data }
    }

}

const NextList = ({ users }) => {
    return (
        <>
            <Head>
                <title>NextList | List</title>
            </Head>
            <div>
                <h1>NextList</h1>
                {users.map(user => (
                    <Link key={user.id} href={`/list/${user.id}`}>
                        <a className={styles.single}>
                            <h3>{user.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default NextList;