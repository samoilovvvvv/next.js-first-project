import { FC } from 'react'

// @ts-ignore
import { GetStaticProps } from 'next'

import Heading from '../components/Heading'
import Socials from '../components/Socials'

// @ts-ignore
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

type homeTypeProps = {
    socials: [{
        id: string,
        icon: string,
        path: string
    }]
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`)
  const data = await response.json()
  
  if (!data) {
    return {
      notFound: true
    }
  }
  
  return {
    props: { socials: data }
  }
}

const Home: FC<homeTypeProps> = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text={'Next.js Application'} />
      <Socials socials={socials} />
    </div>
  )
}

export default Home