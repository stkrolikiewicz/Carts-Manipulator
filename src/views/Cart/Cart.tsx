import GridList from '@/components/GridList/GridList'
import ProductsListItem from '@/components/ProductsListItem/ProductsListItem'
import { Product } from '@/models'
import React from 'react'

interface Props {
  items: Product[]
}

const Cart = ({ items }: Props) => {
  return (
    <GridList>
      {items?.map((item) => (
        <ProductsListItem item={item} key={item.id} />
      ))}
    </GridList>
  )
}

export default Cart