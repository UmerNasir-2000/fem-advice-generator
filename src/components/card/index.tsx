import AdviceModel from "../../models/advice.model"
import classes from "./styles.module.scss"

type AdviceCardProps = {
  advice: AdviceModel
}

const AdviceCard = (props: AdviceCardProps) => {
  const { advice } = props
  return (
    <article className={classes.card}>
      {advice.id} {advice.advice}
    </article>
  )
}

export default AdviceCard
