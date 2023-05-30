import {useState} from 'react'

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetching = async () => {
    try {
      await callback()
    } catch(e) {
      setError(e.message)
    } finally {
      console.log(isLoading);
      setIsLoading(false)
      console.log(isLoading);
    }
  }

  return [fetching, isLoading, error]
}