import { AppProps } from 'next/app'

import { FC } from 'react'

import '../styles/globals.scss'
import Layout from '../components/Layout'

import Head from 'next/head'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&display=swap" rel="stylesheet"/>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
)

export default MyApp
