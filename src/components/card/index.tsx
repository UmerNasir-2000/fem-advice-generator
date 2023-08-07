import dice from "../../assets/icon-dice.svg"
import AdviceModel from "../../models/advice.model"
import classes from "./styles.module.scss"

type AdviceCardProps = {
  advice: AdviceModel
}

const AdviceCard = (props: AdviceCardProps) => {
  const { advice } = props

  return (
    <article className={classes.card}>
      <header>Advice # {advice.id}</header>
      <p>{advice.advice}</p>
      <button type='button'>
        <img src={dice} alt='' />
      </button>
    </article>
  )
}

export default AdviceCard
