import BackButton from "../../Props/ButtonProp/BackButtnProp/BackButton"
import NextButton from "../../Props/ButtonProp/NextButtonProp/NextButton"


const SummaryBtn = () => {
  return (
    <div className="button__wrapper">
      <BackButton to ="/addOns " />
      <NextButton to='/confirm' text={'Confirm'} />
    </div>
  )
}

export default SummaryBtn
