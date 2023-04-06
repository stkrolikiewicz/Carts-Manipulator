import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Main } from "@/views";
import { NextPage } from "next";
import Loader from "@/components/Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import Error from "@/components/Error/Error";
import useCarts from "@/hooks/useCarts";

const HomePage: NextPage = () => {
  const { data, isLoading, isValidating, error } = useCarts()
  return (
    <>
      <Head>
        <title>Carts Manipulator</title>
        <meta name="description" content="App used to manipulate carts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        {error && <Error>{error.message}</Error>
        }
        {(isLoading || isValidating || !data && !error) && <Loader />}
        {data && data[0] && <Main items={data} />}
      </Layout>
    </>
  );
}

export default HomePage