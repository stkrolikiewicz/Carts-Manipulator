import React from 'react'
import styles from './ProductsListItem.module.css'
import { Product } from '@/models'
import GridListItem from '../GridListItem/GridListItem'
import MyPopover from '../MyPopover/MyPopover'
import Button from '@/Button/Button'
import ProductCard from '../ProductCard/ProductCard'
import clsx from 'clsx'

type Props = {
  item: Product
}

const ProductsListItem = ({ item }: Props) => {
  return (
    <GridListItem>
      <div className={styles.container}>
        <div className={styles.info}>
          <h4 className={styles.name}>{item.title}</h4>
          <p className={clsx(styles.tagline, 'line-through')}>price: {item.price}</p>
          <h6 className={clsx(styles.tagline, item.discountedPrice > item.price ? 'text-green-600' : 'text-red-600')}>discounted price: {item.discountedPrice}</h6>
        </div>
        <MyPopover button={<Button>Show details</Button>}>
          <ProductCard item={item} />
        </MyPopover>
      </div>
    </GridListItem>
  )
}

export default ProductsListItem