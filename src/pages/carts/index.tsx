import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Main } from "@/views";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import Error from "@/components/Error/Error";

const CartsPage: NextPage = () => {
  const cartsList = useSelector((state: RootState) => state.cartsList.value)
  return (
    <>
      <Head>
        <title>Selected carts</title>
        <meta name="description" content="List of selected carts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {cartsList.length ? <Main items={cartsList} /> : <Error>Cart list is empty.</Error>}
      </Layout>
    </>
  );
}

export default CartsPage