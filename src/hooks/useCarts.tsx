import useSWR from "swr"
import { fetcher } from '@/lib/swr'
import { Cart, Response } from "@/models"


const useCarts = () => {

  const swr = useSWR<Response>(`https://dummyjson.com/carts`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  console.log(swr.data)

  return {
    data: swr?.data?.carts as Cart[],
    isLoading: swr.isLoading,
    isValidating: swr.isValidating,
    error: swr.error
  }
}

export default useCarts