import { FaGamepad } from 'react-icons/fa'

const AdvancedYearly = () => {
  return (
    <>
    <button className="btn__monthly__opt">
    <div className="icon__opt">
        <FaGamepad className='icons' style={{
         backgroundColor: 'pink'
        }} />
        <div className='plan__details'>
           <h2 className='plan__mainText'>Advanced </h2>
        </div>
        <p className="plan_amount">$120/yr</p>
        <p className='bonous'>2 months free</p>
    </div>
 </button>
</>  
  )
}

export default AdvancedYearly
