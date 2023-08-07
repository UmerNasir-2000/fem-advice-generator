import AdviceModel from "../../models/advice.model"

type AdviceCardProps = {
  advice: AdviceModel
}

const AdviceCard = (props: AdviceCardProps) => {
  const { advice } = props
  return (
    <div>
      {advice.id} {advice.advice}
    </div>
  )
}

export default AdviceCard
