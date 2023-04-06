import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@/Button/Button'
import clsx from 'clsx'
import styles from './cartsList.module.css'
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/solid'
import { addCart, removeCart } from './cartsListSlice'
import { Cart } from '@/models'

type Props = {
  item: Cart
}

const CartsListManager = ({ item }: Props) => {
  const cartsList = useSelector((state: RootState) => state.cartsList.value)
  const dispatch = useDispatch()

  const includesItem = cartsList.includes(item)

  return (
    <div className={styles.container}>
      <div className={clsx('transition', includesItem && 'opacity-0')}>
        <Button onClick={() => dispatch(addCart(item))} disabled={includesItem} bgColor='bg-green-500'><ShoppingCartIcon className='h-6' /></Button>
      </div>
      <div className={clsx('transition', !includesItem && 'opacity-0')}>
        <Button onClick={() => dispatch(removeCart(item))} disabled={!includesItem} bgColor='bg-red-600'><TrashIcon className='h-6' /></Button>
      </div>
    </div>
  )
}
export default CartsListManager