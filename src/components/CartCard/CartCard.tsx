import React from 'react'
import styles from './CartCard.module.css'
import { Cart } from '@/models'
import Button from '@/Button/Button'
import Link from 'next/link'
import CartsListManager from '@/features/cartsList/cartsList'
import CartView from '@/views/Cart/Cart'
import Chart from '../Chart/Chart'
import Error from '../Error/Error'

type Props = {
  item: Cart
}

const CartCard = ({ item }: Props) => {
  return (
    <div className={styles.container}>
      {item.id ?
        <>
          <div className={styles.info}>
            <h3>Cart nr {item.id}</h3>
          </div>
          <Chart data={item.products} />
          <CartView items={item.products} />
          <CartsListManager item={item} />
        </> : <Error>Cart not found</Error>
      }
      <Link href="/">
        <Button>Back home</Button>
      </Link>
    </div>
  )
}

export default CartCard