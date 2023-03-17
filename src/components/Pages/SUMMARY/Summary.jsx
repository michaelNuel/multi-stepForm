import HeadingProp from "../../Props/HeadingProp/HeadingProp"
import SummaryBtn from "./SummaryBtn"


const Summary = () => {
  return (
   <div className="children_wrapper">
    <HeadingProp mainText={'Finishing Up'} subText={'Double-check everything looks OK before confirming'}  />
    <SummaryBtn />
   </div>
  )
}

export default Summary
