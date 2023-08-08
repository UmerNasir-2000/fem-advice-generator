import { useCallback } from "react"
import dice from "../../assets/icon-dice.svg"
import desktopDivider from "../../assets/pattern-divider-desktop.svg"
import desktopDividerMobile from "../../assets/pattern-divider-mobile.svg"
import { BASE_API_URL } from "../../constants"
import AdviceModel from "../../models/advice.model"
import classes from "./styles.module.scss"

type AdviceCardProps = {
  advice: AdviceModel
  setAdvice: React.Dispatch<React.SetStateAction<AdviceModel>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const AdviceCard = (props: AdviceCardProps) => {
  const { advice, setAdvice, setLoading, loading } = props

  const onDiceClick = useCallback(async () => {
    setLoading(true)
    const response = await fetch(BASE_API_URL)
    const data = await response.json()
    setLoading(false)
    setAdvice(new AdviceModel(data.slip.id, data.slip.advice))
  }, [setAdvice, setLoading])

  return (
    <article className={classes.card}>
      <header>Advice # {advice.id}</header>
      <p>{advice.advice}</p>
      <picture>
        <source srcSet={desktopDividerMobile} media='(max-width: 560px)' />
        <img src={desktopDivider} alt='Product' />
      </picture>
      <button type='button' onClick={onDiceClick} disabled={loading}>
        <img src={dice} alt='' className={loading ? "roll" : ""} />
      </button>
    </article>
  )
}

export default AdviceCard
