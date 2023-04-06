import CartsListItem from '@/components/CartsListItem/CartsListItem'
import GridList from '@/components/GridList/GridList'
import { Cart } from '@/models'
import React from 'react'

interface Props {
  items: Cart[] | null
}

const Main = ({ items }: Props) => {
  return (
    <GridList>
      {items?.map((item) => (
        <CartsListItem item={item} key={item.id} />
      ))}
    </GridList>
  )
}

export default Main