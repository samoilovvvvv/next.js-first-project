import { FC, useEffect } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

import Heading from '../components/Heading'
import styles from '../styles/404.module.scss'

const Error: FC = () => {
  const router = useRouter()
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [router])
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Something is going wrong..." />
      </div>
    </div>
  )
}

export default Error