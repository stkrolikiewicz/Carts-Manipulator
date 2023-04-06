import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import Button from '@/Button/Button'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import CartsButton from '../CartsButton/CartsButton'

type Props = {
  home?: boolean
}

const Header = ({ home }: Props) => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      {home
        ? <h2 className={styles.title}>Carts  manipulator</h2>
        : (
          <div className={styles.backToHome}>
            <Link href="/"><Button><HomeIcon className='h-6' /></Button></Link>
          </div>
        )}
      {router.pathname !== '/carts' && <CartsButton />}
    </div>
  )
}

export default Header