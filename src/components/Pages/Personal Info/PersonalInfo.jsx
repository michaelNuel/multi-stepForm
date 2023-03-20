import HeadingProp from "../../Props/HeadingProp/HeadingProp"
import ButtonPe from "./ButtonPe"
import PersonalInfoForm from "./PersonalInfoForm"
import './PersonalInfoForm.scss'




const PersonalInfo = () => {
  return (
    <div className="children__wrapper">
     <HeadingProp mainText={'Personal info'} subText={'Please provide your name, email, address and phone number'}/>
     <PersonalInfoForm formInfo={'Name'} placeholderText={'e.g Stephen King'}  />
     <PersonalInfoForm formInfo={'Email Address'} placeholderText={'e.g stephenking@gmail.com'} />
     <PersonalInfoForm formInfo={'Phone Number'} placeholderText={'e.g +1 234 567 890'} />
     <ButtonPe />
    </div>
    
  )
}

export default PersonalInfo
