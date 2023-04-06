import React from 'react'
import styles from './ProductCard.module.css'
import { Product } from '@/models'
import clsx from 'clsx'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'

type Props = {
  item: Product
}
const ProductCard = ({ item }: Props) => {
  const up = item.discountedPrice > item.price
  return (
    <div className={styles.container}>
      <h3>{item.title}</h3>
      <p>product id: {item.id}</p>
      <p className={clsx(styles.tagline, 'line-through')}>price: {item.price}</p>
      <h6 className={clsx(styles.tagline, up ? 'text-red-600' : 'text-green-600')}>discounted price: {item.discountedPrice}</h6>
      <p className='flex items-center gap-1'>discount: {item.discountPercentage} % {up ? <ArrowUpIcon className='h-[1em] text-red-600' /> : <ArrowDownIcon className='h-[1em] text-green-600' />}</p>
    </div>
  )
}

export default ProductCard