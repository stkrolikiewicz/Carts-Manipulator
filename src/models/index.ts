export interface Product {
  discountPercentage: number
  discountedPrice: number
  id: number
  price: number
  quantity: number
  title: string
  total: number
}

export interface Cart {
  id: number
  discountedTotal: number
  total: number
  products: Array<Product>
  totalProducts: number
  totalQuantity: number
  userId: number
}

export interface Response {
  carts: Array<Cart>
  limit: 20
  skip: 0
  total: number
}