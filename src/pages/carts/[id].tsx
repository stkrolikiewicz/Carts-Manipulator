import Layout from '@/components/Layout/Layout'
import Loader from '@/components/Loader/Loader'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from "next/head";
import useSingleCart from '@/hooks/useSingleCart'
import CartCard from '@/components/CartCard/CartCard'
import Error from '@/components/Error/Error';

const CartPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isValidating, error } = useSingleCart(id)

  return (
    <>
      <Head>
        <title>{data && data.id || "Cart"}</title>
        <meta name="description" content="Cart details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {error && <Error>{error.message}</Error>}
        {(isLoading || isValidating || !data) && <Loader />}
        {data && <CartCard item={data} />}
      </Layout>
    </>
  )

}

export default CartPage