import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../src/components/layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout className="container">
      <Head>
        <title>Karhamba Portfolio</title>
        <meta name="description" content="A Personal website made by Karhamba" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className=" container first_section">
          <article className=" first__Article">
            <p>Development that makes you say...</p>
            <h2>Karhamba!</h2>
            <h3>Full stack developer</h3>
            <p>I am a self-taught full stack developer who can build your project.
              I love new challenges and to learn new skills.</p>
              <div type="" className="first_Article__Buttons my-5">
                <button className="button_1 me-4 btn rounded-pill text-white"> <Link className='pl-2 pl-3' alt='' href='/'> Projects</Link></button>
                <button className="button_2 btn btn-link  text-white">Let’s work together</button>
              </div>
          </article>
        </section>
    </Layout>
  )
}
