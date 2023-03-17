// import HeadingProp from '../../Props/HeadingProp/HeadingProp'
import ButtonSelect from './ButtonSelect'
import SwitchDiv from './SwitchBtn/SwitchDiv'
import HeadingProp from '../../Props/HeadingProp/HeadingProp'
import Monthlyopt from './MonthlyPlan/Monthlyopt'
import './Plans.scss'


const SelectPlan = () => {
  return (
    <div className='children__wrapper'>
      <HeadingProp mainText={'Select Your Plan'} subText={'You have the option of monthly or yearly billing'} />
       <Monthlyopt />
      <SwitchDiv />
      <ButtonSelect />
   </div>
  )
}

export default SelectPlan
