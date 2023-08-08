import { useEffect, useState } from "react"
import { BASE_API_URL } from "../constants"
import AdviceModel from "../models/advice.model"

const useFetch = () => {
  const [advice, setAdvice] = useState<AdviceModel>({ id: 0, advice: "" })
  const [loading, setLoading] = useState<boolean>(false)

  const getAdvice = async () => {
    const response = await fetch(BASE_API_URL)
    return response.json()
  }

  useEffect(() => {
    setLoading(true)
    getAdvice().then((data) => {
      setLoading(false)
      setAdvice(new AdviceModel(data.slip.id, data.slip.advice))
    })

    return () => new AbortController().abort()
  }, [])

  return { advice, setAdvice, loading, setLoading }
}

export default useFetch
