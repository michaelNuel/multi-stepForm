import BackButton from "../../Props/ButtonProp/BackButtnProp/BackButton"
import NextButton from "../../Props/ButtonProp/NextButtonProp/NextButton"


const AddOnBtn = () => {
  return (
    <div className="button__wrapper">
    <BackButton to ="/selectPlan " />
    <NextButton to ="/summary " text={'Next Step'}  />
  </div>
  )
}

export default AddOnBtn
