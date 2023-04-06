import React from 'react'
import styles from './CartsListItem.module.css'
import { Cart } from '@/models'
import Button from '../Button/Button'
import Link from 'next/link'
import CartsListManager from '@/features/cartsList/cartsList'
import GridListItem from '../GridListItem/GridListItem'

type Props = {
  item: Cart
}

const CartsListItem = ({ item }: Props) => {
  return (
    <GridListItem>
      <div className={styles.container}>
        <div className={styles.info}>
          <h4 className={styles.name}>Cart nr {item.id}</h4>
          <p className={styles.tagline}>Number of products: {item.totalQuantity}</p>
          <p className={styles.tagline}>Total discount: {item.discountedTotal}</p>
          <Link href={`/carts/${item.id}`}><Button>Show products</Button></Link>
          <CartsListManager item={item} />
        </div>
      </div>
    </GridListItem>
  )
}

export default CartsListItem