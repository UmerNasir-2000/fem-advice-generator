import { useCallback } from "react"
import dice from "../../assets/icon-dice.svg"
import desktopDivider from "../../assets/pattern-divider-desktop.svg"
import AdviceModel from "../../models/advice.model"
import classes from "./styles.module.scss"

type AdviceCardProps = {
  advice: AdviceModel
  setAdvice: React.Dispatch<React.SetStateAction<AdviceModel>>
}

const AdviceCard = (props: AdviceCardProps) => {
  const { advice, setAdvice } = props

  const onDiceClick = useCallback(async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    setAdvice(new AdviceModel(data.slip.id, data.slip.advice))
  }, [setAdvice])

  return (
    <article className={classes.card}>
      <header>Advice # {advice.id}</header>
      <p>{advice.advice}</p>
      <img src={desktopDivider} alt='' />
      <button type='button' onClick={onDiceClick}>
        <img src={dice} alt='' />
      </button>
    </article>
  )
}

export default AdviceCard
