import HeadingProp from "../../Props/HeadingProp/HeadingProp"
import AddOnBtn from "./AddOnBtn"


const AddOns = () => {
  return (
    <div className="children__wrapper">
   <HeadingProp mainText={'Pick add-ons'} subText={'Add-ons help enhance your gaming performance'}   />
   <AddOnBtn />
   </div>
  )
}

export default AddOns
