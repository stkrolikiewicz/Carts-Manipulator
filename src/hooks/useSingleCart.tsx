import useSWR from "swr"
import { fetcher } from '@/lib/swr'
import { Cart } from "@/models"


const useSingleCart = (id: string | string[] | undefined) => {

  const swr = useSWR(id ? `https://dummyjson.com/carts/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    data: swr.data as Cart,
    isLoading: swr.isLoading,
    isValidating: swr.isValidating,
    error: swr.error
  }
}

export default useSingleCart