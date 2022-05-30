import { FC } from 'react'

import styles from '../styles/Navbar.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import vercelLogo from '../public/vercel.svg'

import clsx from 'clsx'

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' }
]

const Navbar: FC = () => {
  const { pathname } = useRouter()
  
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={vercelLogo} width={60} height={60} alt={'logo'}/>
      </div>
      <div className={styles.links}>
        {
          navigation.map(item => {
            return (
              <Link key={item.id} href={item.path}>
                <a className={clsx({[styles.active]: pathname === item.path})}>{item.title}</a>
              </Link>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Navbar