import BackButton from "../../Props/ButtonProp/BackButtnProp/BackButton"
import NextButton from "../../Props/ButtonProp/NextButtonProp/NextButton"


const ButtonSelect = () => {
  return (
    <div className="button__wrapper">
      <BackButton to='/' />
      <NextButton to ='/addOns'  text={'Next Step'} />
    </div>
  )
}

export default ButtonSelect
