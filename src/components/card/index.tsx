import { useCallback } from "react"
import dice from "../../assets/icon-dice.svg"
import desktopDivider from "../../assets/pattern-divider-desktop.svg"
import AdviceModel from "../../models/advice.model"
import classes from "./styles.module.scss"

type AdviceCardProps = {
  advice: AdviceModel
}

const AdviceCard = (props: AdviceCardProps) => {
  const { advice } = props

  const onDiceClick = useCallback(() => {
    alert("Hello")
  }, [])

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
