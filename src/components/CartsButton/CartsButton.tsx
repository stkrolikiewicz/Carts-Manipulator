import React from 'react'
import Link from 'next/link'
import Button from '@/Button/Button'
import { useSelector } from 'react-redux'
import styles from './CartsButton.module.css'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { RootState } from '@/app/store'
const CartsButton = () => {
  const cartsLength = useSelector((state: RootState) => state.cartsList.value.length)

  return (
    <Link href="/carts">
      <Button>
        <ShoppingCartIcon className='h-6' />
      </Button>
      {cartsLength > 0 && <span className={styles.counter}>{cartsLength}</span>}
    </Link>
  )
}

export default CartsButton