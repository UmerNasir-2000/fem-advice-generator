import { useEffect, useState } from "react"
import AdviceModel from "../models/advice.model"

const useFetch = () => {
  const [advice, setAdvice] = useState<AdviceModel>({ id: 0, advice: "" })

  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    return response.json()
  }

  useEffect(() => {
    getAdvice().then((data) => {
      setAdvice(new AdviceModel(data.slip.id, data.slip.advice))
    })

    return () => new AbortController().abort()
  }, [])

  return { advice, setAdvice }
}

export default useFetch
